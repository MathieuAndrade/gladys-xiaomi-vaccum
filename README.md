### [French version here](README_FR.md)

# Gladys-Xiaomi-Vacuum

This module allows you to drive the first generation Xiaomi vacuum (Not tested with the second;)).

# Prerequisites

To work, this module requires:

- Gladys version 3.10.0 at least.

## Limitations

Do you know the security token and the IP address of the vacuum cleaner.

See [Obtain token](https://github.com/jghaanstra/com.xiaomi-miio/blob/master/docs/obtain_token.md)

## Installation

### Add this module to Gladys

- Install this module from the "Advanced" tab of the "Modules" page, filling in the different fields as follows:

  - Name: `Xiaomi vacuum`
  - Version: `3.4.0`
  - URL: `https: // github.com / MathieuAndrade / gladys-xiaomi-vacuum.git`
  - Slug: `xiaomi-vacuum`

### Restart Gladys

From the first tab of the "Settings" menu, click "Restart".

### Fill in the token and the IP address of the vacuum cleaner

1. Go to the "Settings" page of Gladys in the "Settings" tab.
2. Xiaomi_vacuum_Token "and" Xiaomi_vacuum_Address ".
3. Text-to-use-to-text-to-text.
4. Last step, go to the "Modules" page of Gladys and click on the "Configuration" button of the module to start the connection to your vacuum cleaner.

Enjoy :)

**Note that once the first configuration is done, the connection will be done automatically each time Gladys starts.**
