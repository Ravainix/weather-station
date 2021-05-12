#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

#define SERVER_IP "192.168.1.3:9090"

#define STASSID ""
#define STAPSK  ""

#define BME_SCK 13
#define BME_MISO 12
#define BME_MOSI 11
#define BME_CS 10

Adafruit_BME280 bme;

void setup() {

  Serial.begin(115200);
  while (!Serial) continue;

  Serial.println();
  Serial.println();
  Serial.println();

  WiFi.begin(STASSID, STAPSK);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  unsigned status;
  status = bme.begin(0x76, &Wire);
}

void loop() {
  // wait for WiFi connection
  if ((WiFi.status() == WL_CONNECTED)) {

    WiFiClient client;
    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    
    http.begin(client, "http://" SERVER_IP "/v1/weather"); //HTTP
    http.addHeader("Content-Type", "application/json");

    Serial.print("[HTTP] POST...\n");
  
    StaticJsonDocument<200> doc;
    doc["temperature"] = bme.readTemperature();
    doc["humidity"] = int(bme.readHumidity());
    doc["pressure"] = int(bme.readPressure());
    doc["battery"] = 0;
    serializeJsonPretty(doc, Serial);

    char json_str[100];
    serializeJsonPretty(doc, json_str);

    int httpResponseCode = http.POST(json_str);
        if (httpResponseCode > 0)
        {
            String response = http.getString();

            Serial.println(httpResponseCode);
            Serial.println(response);
        }
        else
        {
            Serial.print("Error on sending POST: ");
            Serial.println(httpResponseCode);
        }
        http.end();
    }
    else
    {
        Serial.println("Error in WiFi connection");
    }

  delay(60*10*1000);
}
