#!/bin/bash

timeout 10s ssh -T alex@fortress.lan << EOF
    doas /usr/bin/systemctl suspend
EOF