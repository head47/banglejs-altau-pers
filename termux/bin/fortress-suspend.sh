#!/bin/bash

timeout 10s ssh -T alex@fortress.lan << EOF
    DISPLAY=:0 i3lock-extra.sh &&
    doas /usr/bin/systemctl suspend
EOF