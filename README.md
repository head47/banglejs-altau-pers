# banglejs-altau-pers

My personal Bangle.JS app for managing specialized things that probably aren't useful to others and so stay here instead of going to [espruino/BangleApps](https://github.com/espruino/BangleApps).

For now it suspends my laptop on launch, more functionality may ensue.

Tested only on Bangle.JS 2.

## Requirements

* Bangle.JS, obviously
* Termux on Android
    * with SSH installed
* Bangle.JS Gadgetbridge with Termux RUN_COMMAND permission (see above)
* a PC that accepts incoming 

## Installation

### Termux
1. Set up Termux as described on the [wiki](https://github.com/termux/termux-app/wiki/RUN_COMMAND-Intent)
2. Install an SSH client, generate a keypair
3. Put `termux/*` in `~/*`

### PC
1. Add Termux's key to authorized_keys
2. Allow execution of used commands with doas/sudo (see [dotfiles/etc/doas.conf](https://github.com/head47/dotfiles/blob/master/etc/doas.conf#L20) for an example)

### Bangle.JS
Upload all files from `banglejs/` to your Bangle.JS through the Espruino IDE. Make sure to convert `altau-pers.png` to `altau-pers.img` when asked

## Usage
Launch Personal from the watch to suspend the machine specified in `termux/bin/fortress-suspend.sh`.