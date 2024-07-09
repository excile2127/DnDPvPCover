# DnDPvPCover

DnDPvPCover is a [Roll20](https://roll20.net/) mod for 5th Edition Dungeon's and Dragons. It provides users with a tool to quickly and accurately determine [cover](#cover-rules) from any 2 positions on a virtual battle map using a 3D ray tracing algorithm.

## Description

There are 4 main systems that make up DnDPvPCover: the [user interface](#user-interface), a [cover calculation algorithm](#cover-calculation-algorithm), a [ray tracing algorithm](#ray-tracing-algorithm), and a [battle map data structure](#battle-map-data-structure).

### User Interface

Writing in progress!

### Cover Calculation Algorithm

Writing in progress!

#### Cover Rules

Below are the rules for determining cover on a grid in 5th Edition Dungeon's and Dragons:
> To determine whether a target has cover against an attack or other effect on a grid, choose a corner of the attacker's space or the point of origin of an area of effect. Then trace imaginary lines from that corner to every corner of any one square the target occupies. If one or two of those lines are blocked by an obstacle (including another creature), the target has half cover. If three or four of those lines are blocked but the attack can still reach the target (such as when the target is behind an arrow slit), the target has three-quarters cover.

In addition, the following rules are being implemented into this mod:
> When tracing imaginary lines to determine cover or line of sight, you choose to trace to either the four corners at the top of the targets square or the four corners at the bottom from any corner of your square. If the target is prone, you instead must trace to the four corners at the bottom of their square. If you are prone, you must trace from one of the four corners at the bottom of your space. For creatures large and larger, you choose a single square to target.

> Certain obstacles are unable to provide total, or even three-quarters, cover. Each obstacle has a rating that determines the highest amount of cover it can provide. If an obstacle were to provide cover higher than its rating, it provides its rating instead. Creatures have a rating of half cover.

> The corners and edges of obstacles block the imaginary lines used to determine cover and line of sight. If the corner of a target is the same as the corner of an obstacle, trace an imaginary line from the center of the target's square to the corner in question, then continue the line to the edge of the map. Other lines to that corner are blocked if they are on the line or on the "cover side" of the line.

### Ray Tracing Algorithm

In progress!

### Battle Map Data Structure

In progress!

## Getting Started

### Dependencies

* Any Roll20 account.
* GM access to a Roll20 game created by someone with a Pro account.
  - I will provide a game once a workable version is available.

### Installing

* First, while signed into a Roll20 account, navigate to the main campaign page of the Roll20 game you want to install this mod to. Note that the game must be created by an account with a Pro subscription and that you'll need GM access.
* Second, click the "Settings" dropdown, followed by the "Mod (API) Scripts" option.
* Third, click "New Script". Name the script "DnDPvPCover.js" and copy the entire contents of the file with the same name in this repository into the empty script editor.
* Fourth, click "Save Script" below the script editor. This will fully install this mod to your Roll20 game!

### Use Guide

Will be written after a workable version is available.

## Authors

* [Andrew Moreno](https://www.linkedin.com/in/andrew-moreno/)

## Version History

* 0.1
    * Initial creation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* [Aaron C. Meadows](https://github.com/shdwjk) - Revealing Module Pattern (RMP) template.
* [Tim Rohr](https://github.com/TimRohr22) - ScriptInfo integration and initial setup help.
