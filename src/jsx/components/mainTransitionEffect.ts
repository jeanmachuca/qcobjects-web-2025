"use strict";

import QCObjects from "qcobjects";

const { Package, TransitionEffect } = QCObjects;

export class MainTransitionEffect extends TransitionEffect {
    name = "main-transition-effect";
    duration = 3000;
    effects = ["Fade"];

}

Package("com.qcobjects.effects.transitions.main", [
    MainTransitionEffect
]);