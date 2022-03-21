
//
//  StatusBar.swift
//  
//
//  Created by Lukas Pistrol on 19.03.22.
//
import SwiftUI
import GitClient

func checkIfHovering(isHovering: Bool) {
    switch isHovering {
    case true: NSCursor.pointingHand.push()
    case false: NSCursor.pop()
    }
}

@available(macOS 12, *)
public struct StatusBarView: View {

@@ -139,11 +146,7 @@ public struct StatusBarView: View {
		.menuStyle(.borderlessButton)
		.fixedSize()
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: Bool)
		}
	}

@@ -173,11 +176,7 @@ public struct StatusBarView: View {
		.buttonStyle(.borderless)
		.foregroundStyle(.primary)
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: hovering)
		}
	}

@@ -192,11 +191,7 @@ public struct StatusBarView: View {
			.font(toolbarFont)
			.foregroundStyle(.primary)
			.onHover { hovering in
				if hovering {
					NSCursor.pointingHand.push()
				} else {
					NSCursor.pop()
				}
                checkIfHovering(isHovering: hovering)
			}
	}

@@ -210,11 +205,7 @@ public struct StatusBarView: View {
		.menuStyle(.borderlessButton)
		.fixedSize()
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: hovering)
		}
	}

@@ -228,11 +219,7 @@ public struct StatusBarView: View {
		.menuStyle(.borderlessButton)
		.fixedSize()
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: hovering)
		}
	}

@@ -246,11 +233,7 @@ public struct StatusBarView: View {
		.menuStyle(.borderlessButton)
		.fixedSize()
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: hovering)
		}
	}

@@ -270,11 +253,7 @@ public struct StatusBarView: View {
		.tint(model.isExpanded ? .accentColor : .primary)
		.buttonStyle(.borderless)
		.onHover { hovering in
			if hovering {
				NSCursor.pointingHand.push()
			} else {
				NSCursor.pop()
			}
			checkIfHovering(isHovering: hovering)
		}
	}
}
