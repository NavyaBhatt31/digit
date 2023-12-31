All notable changes to this module will be documented in this file.

## 1.2.4-beta - 2022-09-20
- Upgraded spring-boot-starter-parent to 2.2.13 and spring beans to 5.2.20.RELEASE. Remove log4j depencdency which was not used

## 1.2.3 - 2022-01-13
- Updated to log4j2 version 2.17.1

## 1.2.2 - 2021-05-11

- TimeZone is now made configurable

## 1.2.1 - 2021-02-26

- Updated domain name in application.properties
- Added size validations
- Change the time zone to IST for date generation

## 1.2.0 - 2020-06-17

- Added typescript definition generation plugin
- Upgraded to tracer:`2.0.0-SNAPSHOT`
- Upgraded to spring boot `2.2.6-RELEASE`
- Upgraded to flyway-core `6.4.3 version`

## 1.1.0

- Added option to auto create sequences
- Moved id generation config from DB to MDMS
- Set `autocreate.new.seq` to `true` to enable auto creation of sequences

## 1.0.0

- Base version