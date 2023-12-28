Bluetooth.println(JSON.stringify({
    t: "intent",
    target: "service",
    package: "com.termux",
    action: "com.termux.RUN_COMMAND",
    extra: {
        "com.termux.RUN_COMMAND_PATH": "~/bin/fortress-suspend.sh",
    }
}));
setTimeout(function () { Bangle.showClock(); }, 0);