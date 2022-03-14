'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

// endregion
// region Fundamental Domain
var PressKind;
(function (PressKind) {
    PressKind[PressKind["ModifierOnly"] = 0] = "ModifierOnly";
    PressKind[PressKind["SpecialKey"] = 1] = "SpecialKey";
    PressKind[PressKind["NormalKey"] = 2] = "NormalKey";
})(PressKind || (PressKind = {}));
var KeyPress = /** @class */ (function () {
    function KeyPress(key, shift, alt, ctrl, meta) {
        var _this = this;
        this.text = function () {
            var metaRepr = _this.meta ? '⌘ + ' : '';
            var altRepr = _this.alt ? 'Alt + ' : '';
            var ctrlRepr = _this.ctrl ? 'Ctrl + ' : '';
            var shiftRepr = _this.shift ? '⇧ + ' : '';
            return metaRepr + ctrlRepr + altRepr + shiftRepr + _this.key;
        };
        this.kbd = function () {
            var result = document.createElement('kbd');
            result.addClass('setting-hotkey');
            result.setText(_this.text());
            result.style.padding = '2px';
            result.style.margin = '5px';
            result.style.border = '1px solid rgba(255,255,255,.25)';
            result.style.borderRadius = '3px';
            return result;
        };
        this.asHash = function () {
            return _this.text();
        };
        this.kind = function () {
            if (_this.key === null ||
                _this.key === undefined ||
                ['Alt', 'Control', 'Shift', 'Meta', 'AltGraph'].includes(_this.key)) {
                return PressKind.ModifierOnly;
            }
            if (['Enter', 'Escape', 'Backspace'].includes(_this.key)) {
                return PressKind.SpecialKey;
            }
            return PressKind.NormalKey;
        };
        this.key = key;
        this.shift = shift;
        this.alt = alt;
        this.ctrl = ctrl;
        this.meta = meta;
    }
    // region static constructors
    KeyPress.ctrl = function (key) {
        return new KeyPress(key, false, false, true, false);
    };
    KeyPress.alt = function (key) {
        return new KeyPress(key, false, true, false, false);
    };
    KeyPress.shift = function (key) {
        return new KeyPress(key, true, false, false, false);
    };
    KeyPress.meta = function (key) {
        return new KeyPress(key, false, false, false, true);
    };
    KeyPress.just = function (key) {
        return new KeyPress(key, false, false, false, false);
    };
    KeyPress.ctrlAlt = function (key) {
        return new KeyPress(key, false, true, true, false);
    };
    KeyPress.fromEvent = function (event) {
        var key = event.key;
        var shift = event.shiftKey;
        var ctrl = event.ctrlKey;
        var alt = event.altKey;
        var meta = event.metaKey;
        return new KeyPress(key, shift, alt, ctrl, meta);
    };
    KeyPress.fromCustom = function (binding) {
        var modifiers = binding.modifiers;
        var key = binding.key;
        var shift = modifiers.contains('Shift');
        var ctrl = modifiers.contains('Ctrl');
        var alt = modifiers.contains('Alt');
        var meta = modifiers.contains('Meta');
        return new KeyPress(key, shift, ctrl, alt, meta);
    };
    KeyPress.of = function (keyPressLike) {
        return new KeyPress(keyPressLike.key, keyPressLike.shift, keyPressLike.alt, keyPressLike.ctrl, keyPressLike.meta);
    };
    return KeyPress;
}());
var KeyMap = /** @class */ (function () {
    function KeyMap(commandID, sequence) {
        var _this = this;
        this.text = function () {
            return (_this.commandID +
                ' = ' +
                _this.sequence.map(function (press) { return press.text(); }).join(' => '));
        };
        this.sequence = sequence;
        this.commandID = commandID;
    }
    KeyMap.of = function (keyMapLike) {
        // FIXME : Theoretically possible to create a keymap without a commandID.
        var sequence = keyMapLike.sequence || [];
        var presses = sequence.map(KeyPress.of);
        var command = keyMapLike.commandID;
        return new KeyMap(command, presses);
    };
    KeyMap.prototype[Symbol.iterator] = function () {
        return this.sequence.values();
    };
    return KeyMap;
}());
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
    }
    TrieNode.prototype.child = function (key) {
        return this.children.get(key);
    };
    TrieNode.prototype.addChild = function (key, child) {
        this.value = null;
        this.children.set(key, child);
    };
    TrieNode.prototype.leaves = function () {
        if (this.isLeaf()) {
            return [this];
        }
        var result = [];
        this.children.forEach(function (child, _) {
            result = result.concat(child.leaves());
        });
        return result;
    };
    TrieNode.prototype.leafValues = function () {
        return this.leaves().map(function (node) { return node.value; });
    };
    TrieNode.prototype.isLeaf = function () {
        return this.children.size === 0;
    };
    TrieNode.prototype.setValue = function (value) {
        this.value = value;
    };
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.from = function (iter) {
        var trie = new Trie();
        trie.addAll(iter);
        return trie;
    };
    Trie.prototype.addAll = function (iter) {
        var e_1, _a;
        try {
            for (var iter_1 = __values(iter), iter_1_1 = iter_1.next(); !iter_1_1.done; iter_1_1 = iter_1.next()) {
                var item = iter_1_1.value;
                this.add(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Trie.prototype.add = function (composite) {
        var e_2, _a;
        // FIXME : Honestly, very sus implementation
        var lastSeenNode = this.root;
        try {
            for (var composite_1 = __values(composite), composite_1_1 = composite_1.next(); !composite_1_1.done; composite_1_1 = composite_1.next()) {
                var component = composite_1_1.value;
                var key = component.asHash();
                var child = lastSeenNode.child(key) || new TrieNode();
                lastSeenNode.addChild(key, child);
                lastSeenNode = child;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (composite_1_1 && !composite_1_1.done && (_a = composite_1.return)) _a.call(composite_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (lastSeenNode.value !== undefined) {
            throw new Error('Duplicate keymap');
        }
        lastSeenNode.setValue(composite);
        return this;
    };
    Trie.prototype.bestMatch = function (sequence) {
        var e_3, _a;
        var lastNode = this.root;
        try {
            for (var sequence_1 = __values(sequence), sequence_1_1 = sequence_1.next(); !sequence_1_1.done; sequence_1_1 = sequence_1.next()) {
                var keyPress = sequence_1_1.value;
                var key = keyPress.asHash();
                var child = lastNode.child(key);
                if (!child) {
                    return null;
                }
                lastNode = child;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (sequence_1_1 && !sequence_1_1.done && (_a = sequence_1.return)) _a.call(sequence_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return lastNode;
    };
    return Trie;
}());
var MatchKind;
(function (MatchKind) {
    MatchKind[MatchKind["NoMatch"] = 0] = "NoMatch";
    MatchKind[MatchKind["PartialMatch"] = 1] = "PartialMatch";
    MatchKind[MatchKind["FullMatch"] = 2] = "FullMatch";
})(MatchKind || (MatchKind = {}));
var MatchState;
(function (MatchState) {
    MatchState[MatchState["EmptyMatch"] = 0] = "EmptyMatch";
    MatchState[MatchState["StartedMatch"] = 1] = "StartedMatch";
    MatchState[MatchState["RetainedMatch"] = 2] = "RetainedMatch";
    MatchState[MatchState["ImprovedMatch"] = 3] = "ImprovedMatch";
    MatchState[MatchState["SuccessMatch"] = 4] = "SuccessMatch";
    MatchState[MatchState["InvalidMatch"] = 5] = "InvalidMatch";
})(MatchState || (MatchState = {}));
var MatchStateKind;
(function (MatchStateKind) {
    MatchStateKind[MatchStateKind["Initial"] = 0] = "Initial";
    MatchStateKind[MatchStateKind["Flow"] = 1] = "Flow";
    MatchStateKind[MatchStateKind["Terminal"] = 2] = "Terminal";
})(MatchStateKind || (MatchStateKind = {}));
var MatchMachine = /** @class */ (function () {
    function MatchMachine(trie) {
        var _this = this;
        this.advance = function (keypress) {
            var macroState = _this.stateKind();
            var wasAlreadySearching = macroState === MatchStateKind.Flow;
            if (macroState === MatchStateKind.Terminal) {
                // Reset and try again.
                _this.currentState = MatchState.EmptyMatch;
                _this.currentSequence = [];
                _this.currentMatches = [];
                return _this.advance(keypress);
            }
            if (keypress.kind() === PressKind.ModifierOnly) {
                _this.currentState = [MatchState.EmptyMatch, MatchState.InvalidMatch, MatchState.SuccessMatch].includes(_this.currentState)
                    ? MatchState.EmptyMatch
                    : MatchState.RetainedMatch;
                return _this.currentState;
            }
            _this.currentSequence.push(keypress);
            var bestMatch = _this.trie.bestMatch(_this.currentSequence);
            var matchKind = interpretMatch(bestMatch);
            _this.currentMatches = bestMatch ? bestMatch.leafValues() : [];
            switch (matchKind) {
                case MatchKind.NoMatch:
                    _this.currentSequence = [];
                    _this.currentState = wasAlreadySearching
                        ? MatchState.InvalidMatch
                        : MatchState.EmptyMatch;
                    break;
                case MatchKind.PartialMatch:
                    _this.currentState = wasAlreadySearching
                        ? MatchState.ImprovedMatch
                        : MatchState.StartedMatch;
                    break;
                case MatchKind.FullMatch:
                    _this.currentState = wasAlreadySearching
                        ? MatchState.SuccessMatch
                        : // Very sus to reach success state at first try.
                            MatchState.SuccessMatch;
                    break;
            }
            return _this.currentState;
        };
        this.allMatches = function () {
            return _this.currentMatches;
        };
        this.fullMatch = function () {
            var numMatches = _this.allMatches().length;
            var isFullMatch = _this.currentState === MatchState.SuccessMatch;
            // Sanity checking.
            if (isFullMatch && numMatches !== 1) {
                writeConsole('State Machine in FullMatch state, but availableHotkeys.length contains more than 1 element. This is definitely a bug.');
                return null;
            }
            if (isFullMatch && numMatches === 1) {
                return _this.currentMatches[0];
            }
            return null;
        };
        this.stateKind = function () {
            if (_this.currentState === MatchState.EmptyMatch) {
                return MatchStateKind.Initial;
            }
            var flowStates = [
                MatchState.StartedMatch,
                MatchState.RetainedMatch,
                MatchState.ImprovedMatch,
            ];
            return flowStates.includes(_this.currentState)
                ? MatchStateKind.Flow
                : MatchStateKind.Terminal;
        };
        this.trie = trie;
        this.currentState = MatchState.EmptyMatch;
        this.currentSequence = [];
        this.currentMatches = [];
    }
    return MatchMachine;
}());
var MatchHandler = /** @class */ (function () {
    function MatchHandler(parent) {
        var _this = this;
        this.handleKeyDown = function (event) {
            var keypress = KeyPress.fromEvent(event);
            console.log(keypress);
            var machineState = _this.machine.advance(keypress);
            writeConsole("An keypress resulted in a " + MatchState[machineState] + " state.");
            if (_this.machine.stateKind() !== MatchStateKind.Initial) {
                event.preventDefault();
                if (machineState === MatchState.SuccessMatch) {
                    var keymap = _this.machine.fullMatch();
                    _this.emit(keymap);
                }
            }
        };
        this.parent = parent;
        this.setKeymap(parent.settings.hotkeys);
    }
    MatchHandler.prototype.emit = function (keymap) {
        if (keymap) {
            this.parent.invokeCommand(keymap.commandID);
            return;
        }
        writeConsole('Fully matched an prefix, but without a corresponding Keymap. This is definitely a bug.');
    };
    MatchHandler.prototype.setKeymap = function (keymaps) {
        this.trie = Trie.from(keymaps || []);
        this.machine = new MatchMachine(this.trie);
    };
    MatchHandler.prototype.findMatchingKeymaps = function (presses) {
        var matches = this.trie.bestMatch(presses);
        return matches ? matches.leafValues() : [];
    };
    return MatchHandler;
}());
// endregion
// region Recording of new keymaps
var RecordingState;
(function (RecordingState) {
    RecordingState[RecordingState["EmptySequence"] = 0] = "EmptySequence";
    RecordingState[RecordingState["FirstKey"] = 1] = "FirstKey";
    RecordingState[RecordingState["AddedKeys"] = 2] = "AddedKeys";
    RecordingState[RecordingState["WaitingInput"] = 3] = "WaitingInput";
    RecordingState[RecordingState["DeletedKey"] = 4] = "DeletedKey";
    RecordingState[RecordingState["PendingAddition"] = 5] = "PendingAddition";
    RecordingState[RecordingState["PendingDeletion"] = 6] = "PendingDeletion";
    RecordingState[RecordingState["FinishedMapping"] = 7] = "FinishedMapping";
})(RecordingState || (RecordingState = {}));
var PendingChoice;
(function (PendingChoice) {
    PendingChoice[PendingChoice["KeepLiteral"] = 0] = "KeepLiteral";
    PendingChoice[PendingChoice["DiscardLiteral"] = 1] = "DiscardLiteral";
    PendingChoice[PendingChoice["DeletePrevious"] = 2] = "DeletePrevious";
    PendingChoice[PendingChoice["Finish"] = 3] = "Finish";
    PendingChoice[PendingChoice["Unknown"] = 4] = "Unknown";
})(PendingChoice || (PendingChoice = {}));
var RecordingMachine = /** @class */ (function () {
    function RecordingMachine() {
        var _this = this;
        this.advance = function (keyPress) {
            var classification = keyPress.kind();
            if (classification === PressKind.ModifierOnly) {
                return _this.currentState;
            }
            if (_this.currentState === RecordingState.FinishedMapping) {
                // Explicitly state that it can be re-started without loss.
                _this.currentState = RecordingState.WaitingInput;
                return _this.advance(keyPress);
            }
            if (_this.currentState === RecordingState.PendingAddition ||
                _this.currentState === RecordingState.PendingDeletion) {
                var previousLiteral = _this.currentSequence.pop();
                var action = _this.interpretAction(keyPress);
                switch (action) {
                    case PendingChoice.KeepLiteral:
                        _this.currentSequence.push(previousLiteral);
                        _this.currentState = RecordingState.AddedKeys;
                        break;
                    case PendingChoice.DiscardLiteral:
                        _this.currentState = RecordingState.WaitingInput;
                        break;
                    case PendingChoice.DeletePrevious:
                        _this.currentSequence.pop();
                        _this.currentState = RecordingState.DeletedKey;
                        break;
                    case PendingChoice.Finish:
                        _this.currentState = RecordingState.FinishedMapping;
                        break;
                    default:
                        _this.currentSequence.push(previousLiteral);
                        break;
                }
            }
            else {
                _this.currentSequence.push(keyPress);
                if (classification === PressKind.SpecialKey) {
                    _this.currentState =
                        keyPress.key === 'Enter'
                            ? RecordingState.PendingAddition
                            : RecordingState.PendingDeletion;
                }
                else {
                    _this.currentState =
                        _this.currentSequence.length === 1
                            ? RecordingState.FirstKey
                            : RecordingState.AddedKeys;
                }
            }
            return _this.currentState;
        };
        this.presses = function () {
            return _this.currentSequence;
        };
        this.documentRepresentation = function () {
            return _this.presses().map(function (press) { return press.kbd(); });
        };
        this.currentState = RecordingState.EmptySequence;
        this.currentSequence = [];
    }
    RecordingMachine.prototype.interpretAction = function (keypress) {
        if (keypress.ctrl && keypress.alt && keypress.key === 'Enter') {
            return PendingChoice.Finish;
        }
        if (keypress.key === 'Enter') {
            return PendingChoice.KeepLiteral;
        }
        else if (keypress.key === 'Backspace' &&
            this.currentState === RecordingState.PendingDeletion) {
            return PendingChoice.DeletePrevious;
        }
        else if (keypress.key === 'Backspace' &&
            this.currentState === RecordingState.PendingAddition) {
            return PendingChoice.DiscardLiteral;
        }
        return PendingChoice.Unknown;
    };
    return RecordingMachine;
}());
var RecordingModal = /** @class */ (function (_super) {
    __extends(RecordingModal, _super);
    function RecordingModal(parent, commandId) {
        var _this = _super.call(this, parent.app) || this;
        _this.onOpen = function () {
            _this.renderContent(_this.registerMachine.documentRepresentation());
            document.addEventListener('keydown', _this.handleKeyDown);
        };
        _this.onClose = function () {
            document.removeEventListener('keydown', _this.handleKeyDown);
            _this.parent.display();
        };
        _this.handleKeyDown = function (event) {
            event.preventDefault();
            var keyPress = KeyPress.fromEvent(event);
            var registerState = _this.registerMachine.advance(keyPress);
            _this.currentSequence = _this.registerMachine.presses();
            writeConsole("An keypress resulted in " + RecordingState[registerState] + " state.");
            switch (registerState) {
                case RecordingState.EmptySequence:
                case RecordingState.WaitingInput:
                case RecordingState.FirstKey:
                case RecordingState.DeletedKey:
                case RecordingState.AddedKeys:
                    _this.renderNormally();
                    return;
                case RecordingState.PendingDeletion:
                case RecordingState.PendingAddition:
                    _this.renderPending(registerState);
                    return;
                case RecordingState.FinishedMapping:
                    _this.saveSequence();
                    return;
            }
        };
        _this.renderContent = function (inKeySequence, inAdditionalContent) {
            var _a;
            var elements = inKeySequence || [];
            var additionalContent = inAdditionalContent || [];
            _this.contentEl.empty();
            var command = document.createElement('kbd');
            command.setText(_this.commandId);
            var header = document.createElement('h3');
            header.setText('Adding keymap for command ');
            header.appendChild(command);
            var introText = document.createElement('div');
            introText.addClass('setting-hotkey');
            introText.style.overflow = 'auto';
            if (elements.length === 0) {
                var prompt_1 = document.createElement('span');
                prompt_1.setText('Waiting for keyboard input.');
                introText.appendChild(prompt_1);
            }
            else {
                introText.append.apply(introText, __spread(elements));
            }
            _this.contentEl.appendChild(header);
            _this.contentEl.appendChild(introText);
            if (additionalContent) {
                (_a = _this.contentEl).append.apply(_a, __spread(additionalContent));
            }
            new obsidian.Setting(_this.contentEl).addButton(function (button) {
                button.setButtonText('Save');
                button.onClick(function () {
                    _this.saveSequence();
                });
            });
        };
        _this.saveSequence = function () {
            var conflicts = _this.parent.conflicts(_this.currentSequence);
            if (conflicts.length >= 1) {
                // todo handle this properly
                createNotice('There are conflicts with your keyPresses!');
            }
            else {
                var newKeyMap = new KeyMap(_this.commandId, _this.currentSequence);
                _this.parent.addKeymap(newKeyMap);
                var sequenceRepr = newKeyMap.sequence
                    .map(function (key) { return key.text(); })
                    .join(' => ');
                createNotice("Command  " + _this.commandId + "\n           can now be invoked by " + sequenceRepr);
                _this.close();
            }
        };
        _this.renderNormally = function () {
            _this.renderContent(_this.registerMachine.documentRepresentation());
        };
        _this.renderPending = function (mappingState) {
            // Inplace mutation :(
            var elements = _this.registerMachine.documentRepresentation();
            var lastElement = elements[elements.length - 1];
            lastElement.style.opacity = '0.5';
            var enter = KeyPress.just('Enter').kbd();
            enter.style.borderColor = 'green';
            var backspace = KeyPress.just('Backspace').kbd();
            backspace.style.borderColor = 'red';
            var ctrlAltEnter = KeyPress.ctrlAlt('Enter').kbd();
            var pressLiteral = lastElement.cloneNode(true);
            pressLiteral.style.opacity = '1';
            var discardOrRemoves = mappingState === RecordingState.PendingAddition
                ? ' will discard this input.'
                : ' will delete the previous input.';
            var confirmText = document.createElement('p');
            confirmText.append('Did you mean literal ', pressLiteral, '?', document.createElement('br'), enter, ' will add it to the sequence.', document.createElement('br'), backspace, discardOrRemoves, document.createElement('br'), ctrlAltEnter, ' will discard pending changes and complete.');
            _this.renderContent(elements, [confirmText]);
        };
        _this.parent = parent;
        _this.commandId = commandId;
        _this.registerMachine = new RecordingMachine();
        _this.currentSequence = [];
        return _this;
    }
    return RecordingModal;
}(obsidian.Modal));
var CommandModal = /** @class */ (function (_super) {
    __extends(CommandModal, _super);
    function CommandModal(parent) {
        var _this = _super.call(this, parent.app) || this;
        _this.parent = parent;
        return _this;
    }
    CommandModal.prototype.onOpen = function () {
        var _this = this;
        var title = document.createElement('h3');
        title.setText('Leader Hotkeys: pick a command to create a keymap.');
        this.contentEl.appendChild(title);
        var setting = new obsidian.Setting(this.contentEl);
        setting.addDropdown(function (dropdown) {
            var e_4, _a;
            dropdown.selectEl.addClass('leader-hotkeys-command');
            try {
                for (var _b = __values(_this.parent.obsidianCommands()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var command = _c.value;
                    dropdown.addOption(command.id, command.name);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            var placeHolder = new Option('Select a Command', 'placeholder', true);
            placeHolder.setAttribute('disabled', 'true');
            placeHolder.setAttribute('selected', 'true');
            placeHolder.setAttribute('hidden', 'true');
            dropdown.selectEl.append(placeHolder);
            dropdown.setValue('placeholder');
            dropdown.onChange(function (selectedId) {
                _this.commandId = selectedId;
            });
            dropdown.selectEl.focus();
        });
        setting.addButton(function (button) {
            button.setButtonText('OK');
            button.onClick(function () {
                if (_this.commandId === null ||
                    _this.commandId === undefined ||
                    _this.commandId === '') {
                    createNotice('Select a command to register');
                    return;
                }
                var registerer = new RecordingModal(_this.parent, _this.commandId);
                registerer.open();
                _this.close();
            });
        });
    };
    return CommandModal;
}(obsidian.Modal));
// endregion
var LeaderSettingsTab = /** @class */ (function (_super) {
    __extends(LeaderSettingsTab, _super);
    function LeaderSettingsTab(plugin) {
        var _this = _super.call(this, plugin.app, plugin) || this;
        _this.plugin = plugin;
        _this.app = plugin.app;
        return _this;
    }
    LeaderSettingsTab.prototype.display = function () {
        var _this = this;
        this.refreshCommands();
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Leader Hotkeys Plugin - Settings' });
        containerEl.createEl('h3', { text: 'Existing Hotkeys' });
        for (var i = 0; i < this.currentKeymaps().length; i++) {
            this.displayExisting(i);
        }
        new obsidian.Setting(containerEl).addButton(function (button) {
            button.setButtonText('New Keymap').onClick(function () {
                new CommandModal(_this).open();
            });
        });
    };
    LeaderSettingsTab.prototype.refreshCommands = function () {
        this.commands = listCommands(this.app);
    };
    LeaderSettingsTab.prototype.conflicts = function (keyPresses) {
        // todo validate properly
        return this.plugin.findMatchingKeymaps(keyPresses) || [];
    };
    LeaderSettingsTab.prototype.obsidianCommands = function () {
        return this.commands;
    };
    LeaderSettingsTab.prototype.addKeymap = function (keymap) {
        writeConsole("Adding keymap: " + keymap.text());
        var newHotkeys = __spread(this.currentKeymaps()).concat(keymap);
        this.saveKeymap(newHotkeys);
    };
    LeaderSettingsTab.prototype.removeKeymap = function (positionId) {
        var currentHotkeys = this.currentKeymaps();
        var toRemove = currentHotkeys[positionId];
        writeConsole("Removing keymap: " + toRemove.text());
        var newKeymap = [];
        for (var i = 0; i < currentHotkeys.length; i++) {
            if (i !== positionId) {
                newKeymap.push(currentHotkeys[i]);
            }
        }
        this.saveKeymap(newKeymap);
    };
    LeaderSettingsTab.prototype.updateKeymap = function (positionId, keyMap) {
        writeConsole("Updating keymap at position " + positionId + ": " + keyMap.text());
        var keyMaps = __spread(this.currentKeymaps());
        keyMaps[positionId] = keyMap;
        this.saveKeymap(keyMaps);
    };
    LeaderSettingsTab.prototype.saveKeymap = function (keymaps) {
        this.plugin.persistKeymaps(keymaps);
    };
    LeaderSettingsTab.prototype.displayExisting = function (positionId) {
        var _this = this;
        var containerEl = this.containerEl;
        var thisKeymap = this.currentKeymaps()[positionId];
        var setting = new obsidian.Setting(containerEl);
        setting.addDropdown(function (dropdown) {
            var e_5, _a;
            try {
                for (var _b = __values(_this.commands), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var command = _c.value;
                    dropdown.addOption(command.id, command.name);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            dropdown.onChange(function (newCommand) {
                var newKeyMap = KeyMap.of(thisKeymap);
                newKeyMap.commandID = newCommand;
                _this.updateKeymap(positionId, newKeyMap);
            });
            dropdown.setValue(thisKeymap.commandID);
            dropdown.selectEl.addClass('leader-hotkeys-command');
        });
        setting.addExtraButton(function (button) {
            button
                .setIcon('cross')
                .setTooltip('Delete shortcut')
                .extraSettingsEl.addClass('leader-hotkeys-delete');
            button.onClick(function () {
                _this.removeKeymap(positionId);
                _this.display();
            });
        });
        setting.infoEl.remove();
        var settingControl = setting.settingEl.children[0];
        var keySetter = document.createElement('div');
        keySetter.addClass('setting-hotkey');
        var kbds = thisKeymap.sequence.map(function (press) { return press.kbd(); });
        keySetter.append.apply(keySetter, __spread(kbds));
        keySetter.addEventListener('click', function (_) {
            return new RecordingModal(_this, thisKeymap.commandID).open();
        });
        settingControl.insertBefore(keySetter, settingControl.children[0]);
        var appendText = document.createElement('span');
        appendText.addClass('leader-hotkeys-setting-append-text');
        appendText.setText('to');
        settingControl.insertBefore(appendText, settingControl.children[1]);
    };
    LeaderSettingsTab.prototype.currentSettings = function () {
        return this.plugin.settings;
    };
    LeaderSettingsTab.prototype.currentKeymaps = function () {
        return this.currentSettings().hotkeys;
    };
    return LeaderSettingsTab;
}(obsidian.PluginSettingTab));
var LeaderHotkeys = /** @class */ (function (_super) {
    __extends(LeaderHotkeys, _super);
    function LeaderHotkeys() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registerEventsAndCallbacks = function () { return __awaiter(_this, void 0, void 0, function () {
            var workspaceContainer, openModalCommand;
            var _this = this;
            return __generator(this, function (_a) {
                writeConsole('Registering necessary event callbacks');
                workspaceContainer = this.app.workspace.containerEl;
                this.registerDomEvent(workspaceContainer, 'keydown', this.matchHandler.handleKeyDown);
                writeConsole('Registered workspace "keydown" event callbacks.');
                openModalCommand = {
                    id: 'register-modal',
                    name: 'Open Register Modal',
                    callback: function () {
                        _this.settingsTab.refreshCommands();
                        new CommandModal(_this.settingsTab).open();
                    },
                };
                this.addCommand(openModalCommand);
                writeConsole('Registered open modal command');
                return [2 /*return*/];
            });
        }); };
        _this.loadSavedSettings = function () { return __awaiter(_this, void 0, void 0, function () {
            var savedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        writeConsole('Loading previously saved settings.');
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        savedSettings = (_a.sent()) || {};
                        try {
                            savedSettings.hotkeys = (savedSettings.hotkeys || []).map(KeyMap.of);
                            this.settings = savedSettings;
                            writeConsole('Loaded previous settings.');
                        }
                        catch (err) {
                            writeConsole('A failure occured while parsing the saved settings.');
                            createNotice('A failure occured while loading the saved settings. Fallbacking to defaults.');
                            // todo : Retrocompatibility?
                            //  Harder than i thought since LeaderKey isn't saved here.
                            //  Would need to keep the old command ,
                            //  lookup the binding and convert it to the new one.
                            this.settings = defaultSettings;
                        }
                        this.matchHandler = new MatchHandler(this);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    LeaderHotkeys.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        writeConsole('Started Loading.');
                        return [4 /*yield*/, this.loadSavedSettings()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.registerEventsAndCallbacks()];
                    case 2:
                        _a.sent();
                        this.settingsTab = new LeaderSettingsTab(this);
                        this.addSettingTab(this.settingsTab);
                        writeConsole('Registered Setting Tab.');
                        writeConsole('Finished Loading.');
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaderHotkeys.prototype.onunload = function () {
        writeConsole('Unloading plugin.');
    };
    LeaderHotkeys.prototype.invokeCommand = function (commandID) {
        if (commandID) {
            // todo remove any typing
            var app = this.app;
            app.commands.executeCommandById(commandID);
        }
    };
    LeaderHotkeys.prototype.findMatchingKeymaps = function (presses) {
        return this.matchHandler.findMatchingKeymaps(presses);
    };
    LeaderHotkeys.prototype.persistKeymaps = function (newKeymaps) {
        var _this = this;
        this.settings.hotkeys = newKeymaps;
        this.saveData(this.settings)
            .then(function () {
            _this.matchHandler.setKeymap(newKeymaps);
        })
            .catch(function () {
            createNotice('Error while Saving Keymaps.');
        });
    };
    return LeaderHotkeys;
}(obsidian.Plugin));
// region consts and utils
var listCommands = function (app) {
    // todo remove any type
    var anyApp = app;
    var commands = anyApp.commands.commands;
    return Object.values(commands);
};
var interpretMatch = function (bestMatch) {
    if (!bestMatch) {
        return MatchKind.NoMatch;
    }
    if (bestMatch.isLeaf()) {
        return MatchKind.FullMatch;
    }
    return MatchKind.PartialMatch;
};
var defaultHotkeys = [
    new KeyMap('editor:focus-left', [KeyPress.ctrl('b'), KeyPress.just('h')]),
    new KeyMap('editor:focus-right', [KeyPress.ctrl('b'), KeyPress.just('l')]),
    new KeyMap('editor:focus-top', [KeyPress.ctrl('b'), KeyPress.just('k')]),
    new KeyMap('editor:focus-bottom', [KeyPress.ctrl('b'), KeyPress.just('j')]),
    new KeyMap('command-palette:open', [
        KeyPress.ctrl('q'),
        KeyPress.just('1'),
        KeyPress.just('2'),
        KeyPress.just('2'),
    ]),
    new KeyMap('command-palette:open', [
        KeyPress.ctrl(' '),
        KeyPress.just('p'),
        KeyPress.just('a'),
        KeyPress.just('l'),
        KeyPress.just('l'),
        KeyPress.just('e'),
        KeyPress.just('t'),
        KeyPress.just('t'),
        KeyPress.just('e'),
    ]),
];
var defaultSettings = {
    hotkeys: defaultHotkeys,
};
var writeConsole = function (message) {
    console.debug(" Leader Hotkeys: " + message);
};
var createNotice = function (message) {
    new obsidian.Notice('Leader Hotkeys: ' + message);
};
// endregion

module.exports = LeaderHotkeys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7XG4gIEFwcCxcbiAgTW9kYWwsXG4gIE5vdGljZSxcbiAgUGx1Z2luLFxuICBQbHVnaW5TZXR0aW5nVGFiLFxuICBTZXR0aW5nLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIHJlZ2lvbiAgVHlwZSBTaGltc1xuaW50ZXJmYWNlIE9ic2lkaWFuQ29tbWFuZCB7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBpY29uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbW1hbmRNYXAge1xuICBba2V5OiBzdHJpbmddOiBPYnNpZGlhbkNvbW1hbmQ7XG59XG5cbmludGVyZmFjZSBDdXN0b21Db21tYW5kIHtcbiAga2V5OiBzdHJpbmc7XG4gIG1vZGlmaWVyczogc3RyaW5nW107XG59XG5cbnR5cGUgT3B0aW9uYWw8VD4gPSBUIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuaW50ZXJmYWNlIFN0YXRlTWFjaGluZTxLLCBUPiB7XG4gIC8vIFdvdWxkIGxvdmUgdG8gcmVzdHJpY3QgVCB0byBhIGZpbml0ZSBzZXQgKCBUIGV4dGVuZHMgRW51bSApLFxuICAvLyBidXQgaXQncyBub3QgcG9zc2libGUgdG8gZG8gdGhhdCBpbiBUeXBlU2NyaXB0IGN1cnJlbnRseVxuICBhZHZhbmNlOiAoZXZlbnQ6IEspID0+IFQ7XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gRnVuZGFtZW50YWwgRG9tYWluXG5lbnVtIFByZXNzS2luZCB7XG4gIE1vZGlmaWVyT25seSxcbiAgU3BlY2lhbEtleSxcbiAgTm9ybWFsS2V5LFxufVxuXG5pbnRlcmZhY2UgSGFzaGFibGUge1xuICBhc0hhc2goKTogc3RyaW5nO1xufVxuXG5jbGFzcyBLZXlQcmVzcyBpbXBsZW1lbnRzIEhhc2hhYmxlIHtcbiAgLy8gcmVnaW9uIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbiAgcHVibGljIHN0YXRpYyBjdHJsKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2hpZnQoa2V5OiBzdHJpbmcpOiBLZXlQcmVzcyB7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtZXRhKGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMganVzdChrZXk6IHN0cmluZyk6IEtleVByZXNzIHtcbiAgICByZXR1cm4gbmV3IEtleVByZXNzKGtleSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjdHJsQWx0KGtleTogc3RyaW5nKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3Moa2V5LCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgY29uc3QgY3RybCA9IGV2ZW50LmN0cmxLZXk7XG4gICAgY29uc3QgYWx0ID0gZXZlbnQuYWx0S2V5O1xuICAgIGNvbnN0IG1ldGEgPSBldmVudC5tZXRhS2V5O1xuXG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBhbHQsIGN0cmwsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tQ3VzdG9tKGJpbmRpbmc6IEN1c3RvbUNvbW1hbmQpOiBLZXlQcmVzcyB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG5cbiAgICBjb25zdCBrZXkgPSBiaW5kaW5nLmtleTtcbiAgICBjb25zdCBzaGlmdCA9IG1vZGlmaWVycy5jb250YWlucygnU2hpZnQnKTtcbiAgICBjb25zdCBjdHJsID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdDdHJsJyk7XG4gICAgY29uc3QgYWx0ID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdBbHQnKTtcbiAgICBjb25zdCBtZXRhID0gbW9kaWZpZXJzLmNvbnRhaW5zKCdNZXRhJyk7XG4gICAgcmV0dXJuIG5ldyBLZXlQcmVzcyhrZXksIHNoaWZ0LCBjdHJsLCBhbHQsIG1ldGEpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvZihrZXlQcmVzc0xpa2U6IEtleVByZXNzKTogS2V5UHJlc3Mge1xuICAgIHJldHVybiBuZXcgS2V5UHJlc3MoXG4gICAgICBrZXlQcmVzc0xpa2Uua2V5LFxuICAgICAga2V5UHJlc3NMaWtlLnNoaWZ0LFxuICAgICAga2V5UHJlc3NMaWtlLmFsdCxcbiAgICAgIGtleVByZXNzTGlrZS5jdHJsLFxuICAgICAga2V5UHJlc3NMaWtlLm1ldGEsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIHB1YmxpYyByZWFkb25seSBrZXk6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGFsdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IGN0cmw6IGJvb2xlYW47XG4gIHB1YmxpYyByZWFkb25seSBzaGlmdDogYm9vbGVhbjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHNoaWZ0OiBib29sZWFuLFxuICAgIGFsdDogYm9vbGVhbixcbiAgICBjdHJsOiBib29sZWFuLFxuICAgIG1ldGE6IGJvb2xlYW4sXG4gICkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgdGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IG1ldGFSZXByID0gdGhpcy5tZXRhID8gJ+KMmCArICcgOiAnJztcbiAgICBjb25zdCBhbHRSZXByID0gdGhpcy5hbHQgPyAnQWx0ICsgJyA6ICcnO1xuICAgIGNvbnN0IGN0cmxSZXByID0gdGhpcy5jdHJsID8gJ0N0cmwgKyAnIDogJyc7XG4gICAgY29uc3Qgc2hpZnRSZXByID0gdGhpcy5zaGlmdCA/ICfih6cgKyAnIDogJyc7XG5cbiAgICByZXR1cm4gbWV0YVJlcHIgKyBjdHJsUmVwciArIGFsdFJlcHIgKyBzaGlmdFJlcHIgKyB0aGlzLmtleTtcbiAgfTtcbiAgcHVibGljIHJlYWRvbmx5IGtiZCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gICAgcmVzdWx0LmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuICAgIHJlc3VsdC5zZXRUZXh0KHRoaXMudGV4dCgpKTtcbiAgICByZXN1bHQuc3R5bGUucGFkZGluZyA9ICcycHgnO1xuICAgIHJlc3VsdC5zdHlsZS5tYXJnaW4gPSAnNXB4JztcbiAgICByZXN1bHQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSknO1xuICAgIHJlc3VsdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwdWJsaWMgcmVhZG9ubHkgYXNIYXNoID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBraW5kID0gKCk6IFByZXNzS2luZCA9PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5rZXkgPT09IG51bGwgfHxcbiAgICAgIHRoaXMua2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIFsnQWx0JywgJ0NvbnRyb2wnLCAnU2hpZnQnLCAnTWV0YScsICdBbHRHcmFwaCddLmluY2x1ZGVzKHRoaXMua2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuIFByZXNzS2luZC5Nb2RpZmllck9ubHk7XG4gICAgfVxuICAgIGlmIChbJ0VudGVyJywgJ0VzY2FwZScsICdCYWNrc3BhY2UnXS5pbmNsdWRlcyh0aGlzLmtleSkpIHtcbiAgICAgIHJldHVybiBQcmVzc0tpbmQuU3BlY2lhbEtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJlc3NLaW5kLk5vcm1hbEtleTtcbiAgfTtcbn1cblxuY2xhc3MgS2V5TWFwIGltcGxlbWVudHMgSXRlcmFibGU8S2V5UHJlc3M+IHtcbiAgcHVibGljIHN0YXRpYyBvZihrZXlNYXBMaWtlOiBLZXlNYXApOiBLZXlNYXAge1xuICAgIC8vIEZJWE1FIDogVGhlb3JldGljYWxseSBwb3NzaWJsZSB0byBjcmVhdGUgYSBrZXltYXAgd2l0aG91dCBhIGNvbW1hbmRJRC5cblxuICAgIGNvbnN0IHNlcXVlbmNlID0ga2V5TWFwTGlrZS5zZXF1ZW5jZSB8fCBbXTtcblxuICAgIGNvbnN0IHByZXNzZXMgPSBzZXF1ZW5jZS5tYXAoS2V5UHJlc3Mub2YpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBrZXlNYXBMaWtlLmNvbW1hbmRJRDtcbiAgICByZXR1cm4gbmV3IEtleU1hcChjb21tYW5kLCBwcmVzc2VzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHVibGljIGNvbW1hbmRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1hbmRJRDogc3RyaW5nLCBzZXF1ZW5jZTogS2V5UHJlc3NbXSkge1xuICAgIHRoaXMuc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLmNvbW1hbmRJRCA9IGNvbW1hbmRJRDtcbiAgfVxuXG4gIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxLZXlQcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLnZhbHVlcygpO1xuICB9XG5cbiAgcHVibGljIHRleHQgPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb21tYW5kSUQgK1xuICAgICAgJyA9ICcgK1xuICAgICAgdGhpcy5zZXF1ZW5jZS5tYXAoKHByZXNzKSA9PiBwcmVzcy50ZXh0KCkpLmpvaW4oJyA9PiAnKVxuICAgICk7XG4gIH07XG59XG5cbmludGVyZmFjZSBLZXlCaW5kaW5nIHtcbiAgaG90a2V5czogS2V5TWFwW107XG59XG5cbi8vIGVuZHJlZ2lvblxuXG4vLyByZWdpb24gTWF0Y2hpbmcgb2YgZXhpc3Rpbmcga2V5bWFwc1xuaW50ZXJmYWNlIEhhc2hJdGVyIGV4dGVuZHMgSXRlcmFibGU8SGFzaGFibGU+IHt9XG5cbmNsYXNzIFRyaWVOb2RlPFQ+IHtcbiAgcHVibGljIGNoaWxkcmVuID0gbmV3IE1hcDxzdHJpbmcsIFRyaWVOb2RlPFQ+PigpO1xuXG4gIHB1YmxpYyB2YWx1ZTogT3B0aW9uYWw8VD47XG5cbiAgcHVibGljIGNoaWxkKGtleTogc3RyaW5nKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGlsZChrZXk6IHN0cmluZywgY2hpbGQ6IFRyaWVOb2RlPFQ+KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoa2V5LCBjaGlsZCk7XG4gIH1cblxuICBwdWJsaWMgbGVhdmVzKCk6IFRyaWVOb2RlPFQ+W10ge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gW3RoaXNdO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IFRyaWVOb2RlPFQ+W10gPSBbXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIF8pID0+IHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGQubGVhdmVzKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBsZWFmVmFsdWVzKCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMubGVhdmVzKCkubWFwKChub2RlKSA9PiBub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xlYWYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5jbGFzcyBUcmllPFQgZXh0ZW5kcyBIYXNoSXRlcj4ge1xuICBwdWJsaWMgc3RhdGljIGZyb208SyBleHRlbmRzIEhhc2hJdGVyPihpdGVyOiBLW10pOiBUcmllPEs+IHtcbiAgICBjb25zdCB0cmllID0gbmV3IFRyaWU8Sz4oKTtcbiAgICB0cmllLmFkZEFsbChpdGVyKTtcbiAgICByZXR1cm4gdHJpZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcm9vdDogVHJpZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290ID0gbmV3IFRyaWVOb2RlKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQWxsKGl0ZXI6IFRbXSk6IFRyaWU8VD4ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVyKSB7XG4gICAgICB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYWRkKGNvbXBvc2l0ZTogVCk6IFRyaWU8VD4ge1xuICAgIC8vIEZJWE1FIDogSG9uZXN0bHksIHZlcnkgc3VzIGltcGxlbWVudGF0aW9uXG4gICAgbGV0IGxhc3RTZWVuTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb3NpdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5hc0hhc2goKTtcbiAgICAgIGNvbnN0IGNoaWxkID0gbGFzdFNlZW5Ob2RlLmNoaWxkKGtleSkgfHwgbmV3IFRyaWVOb2RlKCk7XG4gICAgICBsYXN0U2Vlbk5vZGUuYWRkQ2hpbGQoa2V5LCBjaGlsZCk7XG4gICAgICBsYXN0U2Vlbk5vZGUgPSBjaGlsZDtcbiAgICB9XG4gICAgaWYgKGxhc3RTZWVuTm9kZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBrZXltYXAnKTtcbiAgICB9XG4gICAgbGFzdFNlZW5Ob2RlLnNldFZhbHVlKGNvbXBvc2l0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgYmVzdE1hdGNoKHNlcXVlbmNlOiBIYXNoYWJsZVtdKTogT3B0aW9uYWw8VHJpZU5vZGU8VD4+IHtcbiAgICBsZXQgbGFzdE5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChjb25zdCBrZXlQcmVzcyBvZiBzZXF1ZW5jZSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5UHJlc3MuYXNIYXNoKCk7XG4gICAgICBjb25zdCBjaGlsZCA9IGxhc3ROb2RlLmNoaWxkKGtleSk7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGFzdE5vZGUgPSBjaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE5vZGU7XG4gIH1cbn1cblxuZW51bSBNYXRjaEtpbmQge1xuICBOb01hdGNoLFxuICBQYXJ0aWFsTWF0Y2gsXG4gIEZ1bGxNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlIHtcbiAgRW1wdHlNYXRjaCxcbiAgU3RhcnRlZE1hdGNoLFxuICBSZXRhaW5lZE1hdGNoLFxuICBJbXByb3ZlZE1hdGNoLFxuICBTdWNjZXNzTWF0Y2gsXG4gIEludmFsaWRNYXRjaCxcbn1cblxuZW51bSBNYXRjaFN0YXRlS2luZCB7XG4gIEluaXRpYWwsXG4gIEZsb3csXG4gIFRlcm1pbmFsLFxufVxuXG5jbGFzcyBNYXRjaE1hY2hpbmUgaW1wbGVtZW50cyBTdGF0ZU1hY2hpbmU8S2V5UHJlc3MsIE1hdGNoU3RhdGU+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0cmllOiBUcmllPEtleU1hcD47XG4gIHByaXZhdGUgY3VycmVudFN0YXRlOiBNYXRjaFN0YXRlO1xuICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZTogS2V5UHJlc3NbXTtcbiAgcHJpdmF0ZSBjdXJyZW50TWF0Y2hlczogS2V5TWFwW107XG5cbiAgY29uc3RydWN0b3IodHJpZTogVHJpZTxLZXlNYXA+KSB7XG4gICAgdGhpcy50cmllID0gdHJpZTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IE1hdGNoU3RhdGUuRW1wdHlNYXRjaDtcbiAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgIHRoaXMuY3VycmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBhZHZhbmNlID0gKGtleXByZXNzOiBLZXlQcmVzcyk6IE1hdGNoU3RhdGUgPT4ge1xuXG5cbiAgICBcbiAgICBjb25zdCBtYWNyb1N0YXRlID0gdGhpcy5zdGF0ZUtpbmQoKTtcbiAgICBjb25zdCB3YXNBbHJlYWR5U2VhcmNoaW5nID0gbWFjcm9TdGF0ZSA9PT0gTWF0Y2hTdGF0ZUtpbmQuRmxvdztcbiAgICBpZiAobWFjcm9TdGF0ZSA9PT0gTWF0Y2hTdGF0ZUtpbmQuVGVybWluYWwpIHtcbiAgICAgIC8vIFJlc2V0IGFuZCB0cnkgYWdhaW4uXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IE1hdGNoU3RhdGUuRW1wdHlNYXRjaDtcbiAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW107XG4gICAgICB0aGlzLmN1cnJlbnRNYXRjaGVzID0gW107XG4gICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKGtleXByZXNzKTtcbiAgICB9XG4gICAgaWYgKGtleXByZXNzLmtpbmQoKSA9PT0gUHJlc3NLaW5kLk1vZGlmaWVyT25seSkge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBbTWF0Y2hTdGF0ZS5FbXB0eU1hdGNoICwgTWF0Y2hTdGF0ZS5JbnZhbGlkTWF0Y2ggLCBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaF0uaW5jbHVkZXMoIHRoaXMuY3VycmVudFN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1hdGNoU3RhdGUuRW1wdHlNYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGNoU3RhdGUuUmV0YWluZWRNYXRjaDtcblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLnB1c2goa2V5cHJlc3MpO1xuICAgIGNvbnN0IGJlc3RNYXRjaCA9IHRoaXMudHJpZS5iZXN0TWF0Y2godGhpcy5jdXJyZW50U2VxdWVuY2UpO1xuICAgIGNvbnN0IG1hdGNoS2luZCA9IGludGVycHJldE1hdGNoKGJlc3RNYXRjaCk7XG4gICAgdGhpcy5jdXJyZW50TWF0Y2hlcyA9IGJlc3RNYXRjaCA/IGJlc3RNYXRjaC5sZWFmVmFsdWVzKCkgOiBbXTtcblxuICAgIHN3aXRjaCAobWF0Y2hLaW5kKSB7XG4gICAgICBjYXNlIE1hdGNoS2luZC5Ob01hdGNoOlxuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gd2FzQWxyZWFkeVNlYXJjaGluZ1xuICAgICAgICAgID8gTWF0Y2hTdGF0ZS5JbnZhbGlkTWF0Y2hcbiAgICAgICAgICA6IE1hdGNoU3RhdGUuRW1wdHlNYXRjaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1hdGNoS2luZC5QYXJ0aWFsTWF0Y2g6XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gd2FzQWxyZWFkeVNlYXJjaGluZ1xuICAgICAgICAgID8gTWF0Y2hTdGF0ZS5JbXByb3ZlZE1hdGNoXG4gICAgICAgICAgOiBNYXRjaFN0YXRlLlN0YXJ0ZWRNYXRjaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1hdGNoS2luZC5GdWxsTWF0Y2g6XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gd2FzQWxyZWFkeVNlYXJjaGluZ1xuICAgICAgICAgID8gTWF0Y2hTdGF0ZS5TdWNjZXNzTWF0Y2hcbiAgICAgICAgICA6IC8vIFZlcnkgc3VzIHRvIHJlYWNoIHN1Y2Nlc3Mgc3RhdGUgYXQgZmlyc3QgdHJ5LlxuICAgICAgICAgICAgTWF0Y2hTdGF0ZS5TdWNjZXNzTWF0Y2g7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xuICB9O1xuXG4gIHB1YmxpYyBhbGxNYXRjaGVzID0gKCk6IHJlYWRvbmx5IEtleU1hcFtdID0+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hlcztcbiAgfTtcblxuICBwdWJsaWMgZnVsbE1hdGNoID0gKCk6IE9wdGlvbmFsPEtleU1hcD4gPT4ge1xuICAgIGNvbnN0IG51bU1hdGNoZXMgPSB0aGlzLmFsbE1hdGNoZXMoKS5sZW5ndGg7XG4gICAgY29uc3QgaXNGdWxsTWF0Y2ggPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gTWF0Y2hTdGF0ZS5TdWNjZXNzTWF0Y2g7XG5cbiAgICAvLyBTYW5pdHkgY2hlY2tpbmcuXG4gICAgaWYgKGlzRnVsbE1hdGNoICYmIG51bU1hdGNoZXMgIT09IDEpIHtcbiAgICAgIHdyaXRlQ29uc29sZShcbiAgICAgICAgJ1N0YXRlIE1hY2hpbmUgaW4gRnVsbE1hdGNoIHN0YXRlLCBidXQgYXZhaWxhYmxlSG90a2V5cy5sZW5ndGggY29udGFpbnMgbW9yZSB0aGFuIDEgZWxlbWVudC4gVGhpcyBpcyBkZWZpbml0ZWx5IGEgYnVnLicsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVsbE1hdGNoICYmIG51bU1hdGNoZXMgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXRjaGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBwdWJsaWMgc3RhdGVLaW5kID0gKCk6IE1hdGNoU3RhdGVLaW5kID0+IHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09IE1hdGNoU3RhdGUuRW1wdHlNYXRjaCkge1xuICAgICAgcmV0dXJuIE1hdGNoU3RhdGVLaW5kLkluaXRpYWw7XG4gICAgfVxuXG4gICAgY29uc3QgZmxvd1N0YXRlcyA9IFtcbiAgICAgIE1hdGNoU3RhdGUuU3RhcnRlZE1hdGNoLFxuICAgICAgTWF0Y2hTdGF0ZS5SZXRhaW5lZE1hdGNoLFxuICAgICAgTWF0Y2hTdGF0ZS5JbXByb3ZlZE1hdGNoLFxuICAgIF07XG5cbiAgICByZXR1cm4gZmxvd1N0YXRlcy5pbmNsdWRlcyh0aGlzLmN1cnJlbnRTdGF0ZSlcbiAgICAgID8gTWF0Y2hTdGF0ZUtpbmQuRmxvd1xuICAgICAgOiBNYXRjaFN0YXRlS2luZC5UZXJtaW5hbDtcbiAgfTtcbn1cblxuY2xhc3MgTWF0Y2hIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0cmllOiBUcmllPEtleU1hcD47XG4gIHByaXZhdGUgbWFjaGluZTogTWF0Y2hNYWNoaW5lO1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogTGVhZGVySG90a2V5cztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBMZWFkZXJIb3RrZXlzKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zZXRLZXltYXAocGFyZW50LnNldHRpbmdzLmhvdGtleXMpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBrZXlwcmVzcyA9IEtleVByZXNzLmZyb21FdmVudChldmVudCk7XG4gICAgY29uc29sZS5sb2coIGtleXByZXNzICk7XG4gICAgY29uc3QgbWFjaGluZVN0YXRlID0gdGhpcy5tYWNoaW5lLmFkdmFuY2Uoa2V5cHJlc3MpO1xuICAgIHdyaXRlQ29uc29sZShcbiAgICAgIGBBbiBrZXlwcmVzcyByZXN1bHRlZCBpbiBhICR7TWF0Y2hTdGF0ZVttYWNoaW5lU3RhdGVdfSBzdGF0ZS5gLFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5tYWNoaW5lLnN0YXRlS2luZCgpICE9PSBNYXRjaFN0YXRlS2luZC5Jbml0aWFsKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAobWFjaGluZVN0YXRlID09PSBNYXRjaFN0YXRlLlN1Y2Nlc3NNYXRjaCkge1xuICAgICAgICBjb25zdCBrZXltYXAgPSB0aGlzLm1hY2hpbmUuZnVsbE1hdGNoKCk7XG4gICAgICAgIHRoaXMuZW1pdChrZXltYXApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgZW1pdChrZXltYXA6IE9wdGlvbmFsPEtleU1hcD4pOiB2b2lkIHtcbiAgICBpZiAoa2V5bWFwKSB7XG4gICAgICB0aGlzLnBhcmVudC5pbnZva2VDb21tYW5kKGtleW1hcC5jb21tYW5kSUQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyaXRlQ29uc29sZShcbiAgICAgICdGdWxseSBtYXRjaGVkIGFuIHByZWZpeCwgYnV0IHdpdGhvdXQgYSBjb3JyZXNwb25kaW5nIEtleW1hcC4gVGhpcyBpcyBkZWZpbml0ZWx5IGEgYnVnLicsXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRLZXltYXAoa2V5bWFwczogS2V5TWFwW10pOiB2b2lkIHtcbiAgICB0aGlzLnRyaWUgPSBUcmllLmZyb20oa2V5bWFwcyB8fCBbXSk7XG4gICAgdGhpcy5tYWNoaW5lID0gbmV3IE1hdGNoTWFjaGluZSh0aGlzLnRyaWUpO1xuICB9XG5cbiAgcHVibGljIGZpbmRNYXRjaGluZ0tleW1hcHMocHJlc3NlczogS2V5UHJlc3NbXSk6IEtleU1hcFtdIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50cmllLmJlc3RNYXRjaChwcmVzc2VzKTtcbiAgICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXMubGVhZlZhbHVlcygpIDogW107XG4gIH1cbn1cblxuLy8gZW5kcmVnaW9uXG5cbi8vIHJlZ2lvbiBSZWNvcmRpbmcgb2YgbmV3IGtleW1hcHNcbmVudW0gUmVjb3JkaW5nU3RhdGUge1xuICBFbXB0eVNlcXVlbmNlLFxuICBGaXJzdEtleSxcbiAgQWRkZWRLZXlzLFxuICBXYWl0aW5nSW5wdXQsXG4gIERlbGV0ZWRLZXksXG4gIFBlbmRpbmdBZGRpdGlvbixcbiAgUGVuZGluZ0RlbGV0aW9uLFxuICBGaW5pc2hlZE1hcHBpbmcsXG59XG5cbmVudW0gUGVuZGluZ0Nob2ljZSB7XG4gIEtlZXBMaXRlcmFsLFxuICBEaXNjYXJkTGl0ZXJhbCxcbiAgRGVsZXRlUHJldmlvdXMsXG4gIEZpbmlzaCxcbiAgVW5rbm93bixcbn1cblxuY2xhc3MgUmVjb3JkaW5nTWFjaGluZSBpbXBsZW1lbnRzIFN0YXRlTWFjaGluZTxLZXlQcmVzcywgUmVjb3JkaW5nU3RhdGU+IHtcbiAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IFJlY29yZGluZ1N0YXRlO1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRTZXF1ZW5jZTogS2V5UHJlc3NbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLkVtcHR5U2VxdWVuY2U7XG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBhZHZhbmNlID0gKGtleVByZXNzOiBLZXlQcmVzcyk6IFJlY29yZGluZ1N0YXRlID0+IHtcbiAgICBjb25zdCBjbGFzc2lmaWNhdGlvbiA9IGtleVByZXNzLmtpbmQoKTtcblxuICAgIGlmIChjbGFzc2lmaWNhdGlvbiA9PT0gUHJlc3NLaW5kLk1vZGlmaWVyT25seSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5jdXJyZW50U3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLkZpbmlzaGVkTWFwcGluZykge1xuICAgICAgLy8gRXhwbGljaXRseSBzdGF0ZSB0aGF0IGl0IGNhbiBiZSByZS1zdGFydGVkIHdpdGhvdXQgbG9zcy5cbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuV2FpdGluZ0lucHV0O1xuICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZShrZXlQcmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0FkZGl0aW9uIHx8XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID09PSBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nRGVsZXRpb25cbiAgICApIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTGl0ZXJhbCA9IHRoaXMuY3VycmVudFNlcXVlbmNlLnBvcCgpO1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5pbnRlcnByZXRBY3Rpb24oa2V5UHJlc3MpO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIFBlbmRpbmdDaG9pY2UuS2VlcExpdGVyYWw6XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucHVzaChwcmV2aW91c0xpdGVyYWwpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gUmVjb3JkaW5nU3RhdGUuQWRkZWRLZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBlbmRpbmdDaG9pY2UuRGlzY2FyZExpdGVyYWw6XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5XYWl0aW5nSW5wdXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUGVuZGluZ0Nob2ljZS5EZWxldGVQcmV2aW91czpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5wb3AoKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFJlY29yZGluZ1N0YXRlLkRlbGV0ZWRLZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUGVuZGluZ0Nob2ljZS5GaW5pc2g6XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBSZWNvcmRpbmdTdGF0ZS5GaW5pc2hlZE1hcHBpbmc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UucHVzaChwcmV2aW91c0xpdGVyYWwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5wdXNoKGtleVByZXNzKTtcbiAgICAgIGlmIChjbGFzc2lmaWNhdGlvbiA9PT0gUHJlc3NLaW5kLlNwZWNpYWxLZXkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPVxuICAgICAgICAgIGtleVByZXNzLmtleSA9PT0gJ0VudGVyJ1xuICAgICAgICAgICAgPyBSZWNvcmRpbmdTdGF0ZS5QZW5kaW5nQWRkaXRpb25cbiAgICAgICAgICAgIDogUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0RlbGV0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPVxuICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgPyBSZWNvcmRpbmdTdGF0ZS5GaXJzdEtleVxuICAgICAgICAgICAgOiBSZWNvcmRpbmdTdGF0ZS5BZGRlZEtleXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBwcmVzc2VzID0gKCk6IEtleVByZXNzW10gPT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZXF1ZW5jZTtcbiAgfTtcbiAgcHVibGljIHJlYWRvbmx5IGRvY3VtZW50UmVwcmVzZW50YXRpb24gPSAoKTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlcygpLm1hcCgocHJlc3MpID0+IHByZXNzLmtiZCgpKTtcbiAgfTtcblxuICBwcml2YXRlIGludGVycHJldEFjdGlvbihrZXlwcmVzczogS2V5UHJlc3MpOiBQZW5kaW5nQ2hvaWNlIHtcbiAgICBpZiAoa2V5cHJlc3MuY3RybCAmJiBrZXlwcmVzcy5hbHQgJiYga2V5cHJlc3Mua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm4gUGVuZGluZ0Nob2ljZS5GaW5pc2g7XG4gICAgfVxuICAgIGlmIChrZXlwcmVzcy5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybiBQZW5kaW5nQ2hvaWNlLktlZXBMaXRlcmFsO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleXByZXNzLmtleSA9PT0gJ0JhY2tzcGFjZScgJiZcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdEZWxldGlvblxuICAgICkge1xuICAgICAgcmV0dXJuIFBlbmRpbmdDaG9pY2UuRGVsZXRlUHJldmlvdXM7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5cHJlc3Mua2V5ID09PSAnQmFja3NwYWNlJyAmJlxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0FkZGl0aW9uXG4gICAgKSB7XG4gICAgICByZXR1cm4gUGVuZGluZ0Nob2ljZS5EaXNjYXJkTGl0ZXJhbDtcbiAgICB9XG4gICAgcmV0dXJuIFBlbmRpbmdDaG9pY2UuVW5rbm93bjtcbiAgfVxufVxuXG5jbGFzcyBSZWNvcmRpbmdNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQ6IExlYWRlclNldHRpbmdzVGFiO1xuICBwcml2YXRlIHJlYWRvbmx5IHJlZ2lzdGVyTWFjaGluZTogUmVjb3JkaW5nTWFjaGluZTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb21tYW5kSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW50U2VxdWVuY2U6IEtleVByZXNzW107XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBMZWFkZXJTZXR0aW5nc1RhYiwgY29tbWFuZElkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYXJlbnQuYXBwKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmNvbW1hbmRJZCA9IGNvbW1hbmRJZDtcbiAgICB0aGlzLnJlZ2lzdGVyTWFjaGluZSA9IG5ldyBSZWNvcmRpbmdNYWNoaW5lKCk7XG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBvbk9wZW4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KHRoaXMucmVnaXN0ZXJNYWNoaW5lLmRvY3VtZW50UmVwcmVzZW50YXRpb24oKSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgb25DbG9zZSA9ICgpOiB2b2lkID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB0aGlzLnBhcmVudC5kaXNwbGF5KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBrZXlQcmVzcyA9IEtleVByZXNzLmZyb21FdmVudChldmVudCk7XG4gICAgY29uc3QgcmVnaXN0ZXJTdGF0ZSA9IHRoaXMucmVnaXN0ZXJNYWNoaW5lLmFkdmFuY2Uoa2V5UHJlc3MpO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdGhpcy5yZWdpc3Rlck1hY2hpbmUucHJlc3NlcygpO1xuXG4gICAgd3JpdGVDb25zb2xlKFxuICAgICAgYEFuIGtleXByZXNzIHJlc3VsdGVkIGluICR7UmVjb3JkaW5nU3RhdGVbcmVnaXN0ZXJTdGF0ZV19IHN0YXRlLmAsXG4gICAgKTtcblxuICAgIHN3aXRjaCAocmVnaXN0ZXJTdGF0ZSkge1xuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5FbXB0eVNlcXVlbmNlOlxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5XYWl0aW5nSW5wdXQ6XG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLkZpcnN0S2V5OlxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5EZWxldGVkS2V5OlxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5BZGRlZEtleXM6XG4gICAgICAgIHRoaXMucmVuZGVyTm9ybWFsbHkoKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlIFJlY29yZGluZ1N0YXRlLlBlbmRpbmdEZWxldGlvbjpcbiAgICAgIGNhc2UgUmVjb3JkaW5nU3RhdGUuUGVuZGluZ0FkZGl0aW9uOlxuICAgICAgICB0aGlzLnJlbmRlclBlbmRpbmcocmVnaXN0ZXJTdGF0ZSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSBSZWNvcmRpbmdTdGF0ZS5GaW5pc2hlZE1hcHBpbmc6XG4gICAgICAgIHRoaXMuc2F2ZVNlcXVlbmNlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJDb250ZW50ID0gKFxuICAgIGluS2V5U2VxdWVuY2U6IEhUTUxFbGVtZW50W10sXG4gICAgaW5BZGRpdGlvbmFsQ29udGVudD86IEhUTUxFbGVtZW50W10sXG4gICk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gaW5LZXlTZXF1ZW5jZSB8fCBbXTtcbiAgICBjb25zdCBhZGRpdGlvbmFsQ29udGVudCA9IGluQWRkaXRpb25hbENvbnRlbnQgfHwgW107XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcblxuICAgIGNvbnN0IGNvbW1hbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdrYmQnKTtcbiAgICBjb21tYW5kLnNldFRleHQodGhpcy5jb21tYW5kSWQpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGVyLnNldFRleHQoJ0FkZGluZyBrZXltYXAgZm9yIGNvbW1hbmQgJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbW1hbmQpO1xuXG4gICAgY29uc3QgaW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9UZXh0LmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuICAgIGludHJvVGV4dC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBwcm9tcHQuc2V0VGV4dCgnV2FpdGluZyBmb3Iga2V5Ym9hcmQgaW5wdXQuJyk7XG4gICAgICBpbnRyb1RleHQuYXBwZW5kQ2hpbGQocHJvbXB0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50cm9UZXh0LmFwcGVuZCguLi5lbGVtZW50cyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZChpbnRyb1RleHQpO1xuICAgIGlmIChhZGRpdGlvbmFsQ29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50RWwuYXBwZW5kKC4uLmFkZGl0aW9uYWxDb250ZW50KTtcbiAgICB9XG4gICAgbmV3IFNldHRpbmcodGhpcy5jb250ZW50RWwpLmFkZEJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnU2F2ZScpO1xuICAgICAgYnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnNhdmVTZXF1ZW5jZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzYXZlU2VxdWVuY2UgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY29uZmxpY3RzID0gdGhpcy5wYXJlbnQuY29uZmxpY3RzKHRoaXMuY3VycmVudFNlcXVlbmNlKTtcbiAgICBpZiAoY29uZmxpY3RzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAvLyB0b2RvIGhhbmRsZSB0aGlzIHByb3Blcmx5XG4gICAgICBjcmVhdGVOb3RpY2UoJ1RoZXJlIGFyZSBjb25mbGljdHMgd2l0aCB5b3VyIGtleVByZXNzZXMhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0tleU1hcCA9IG5ldyBLZXlNYXAodGhpcy5jb21tYW5kSWQsIHRoaXMuY3VycmVudFNlcXVlbmNlKTtcbiAgICAgIHRoaXMucGFyZW50LmFkZEtleW1hcChuZXdLZXlNYXApO1xuICAgICAgY29uc3Qgc2VxdWVuY2VSZXByID0gbmV3S2V5TWFwLnNlcXVlbmNlXG4gICAgICAgIC5tYXAoKGtleSkgPT4ga2V5LnRleHQoKSlcbiAgICAgICAgLmpvaW4oJyA9PiAnKTtcbiAgICAgIGNyZWF0ZU5vdGljZShgQ29tbWFuZCAgJHt0aGlzLmNvbW1hbmRJZH1cbiAgICAgICAgICAgY2FuIG5vdyBiZSBpbnZva2VkIGJ5ICR7c2VxdWVuY2VSZXByfWApO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlck5vcm1hbGx5ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVuZGVyQ29udGVudCh0aGlzLnJlZ2lzdGVyTWFjaGluZS5kb2N1bWVudFJlcHJlc2VudGF0aW9uKCkpO1xuICB9O1xuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlclBlbmRpbmcgPSAobWFwcGluZ1N0YXRlOiBSZWNvcmRpbmdTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIC8vIElucGxhY2UgbXV0YXRpb24gOihcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMucmVnaXN0ZXJNYWNoaW5lLmRvY3VtZW50UmVwcmVzZW50YXRpb24oKTtcbiAgICBjb25zdCBsYXN0RWxlbWVudCA9IGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGxhc3RFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcblxuICAgIGNvbnN0IGVudGVyID0gS2V5UHJlc3MuanVzdCgnRW50ZXInKS5rYmQoKTtcbiAgICBlbnRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICdncmVlbic7XG4gICAgY29uc3QgYmFja3NwYWNlID0gS2V5UHJlc3MuanVzdCgnQmFja3NwYWNlJykua2JkKCk7XG4gICAgYmFja3NwYWNlLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG5cbiAgICBjb25zdCBjdHJsQWx0RW50ZXIgPSBLZXlQcmVzcy5jdHJsQWx0KCdFbnRlcicpLmtiZCgpO1xuICAgIGNvbnN0IHByZXNzTGl0ZXJhbCA9IGxhc3RFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBwcmVzc0xpdGVyYWwuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgIGNvbnN0IGRpc2NhcmRPclJlbW92ZXMgPVxuICAgICAgICAgICAgICBtYXBwaW5nU3RhdGUgPT09IFJlY29yZGluZ1N0YXRlLlBlbmRpbmdBZGRpdGlvblxuICAgICAgICA/ICcgd2lsbCBkaXNjYXJkIHRoaXMgaW5wdXQuJ1xuICAgICAgICA6ICcgd2lsbCBkZWxldGUgdGhlIHByZXZpb3VzIGlucHV0Lic7XG5cbiAgICBjb25zdCBjb25maXJtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25maXJtVGV4dC5hcHBlbmQoXG4gICAgICAnRGlkIHlvdSBtZWFuIGxpdGVyYWwgJyxcbiAgICAgIHByZXNzTGl0ZXJhbCxcbiAgICAgICc/JyxcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyksXG4gICAgICBlbnRlcixcbiAgICAgICcgd2lsbCBhZGQgaXQgdG8gdGhlIHNlcXVlbmNlLicsXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpLFxuICAgICAgYmFja3NwYWNlLFxuICAgICAgZGlzY2FyZE9yUmVtb3ZlcyxcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyksXG4gICAgICBjdHJsQWx0RW50ZXIsXG4gICAgICAnIHdpbGwgZGlzY2FyZCBwZW5kaW5nIGNoYW5nZXMgYW5kIGNvbXBsZXRlLicsXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoZWxlbWVudHMsIFtjb25maXJtVGV4dF0pO1xuICB9O1xufVxuXG5jbGFzcyBDb21tYW5kTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBMZWFkZXJTZXR0aW5nc1RhYjtcbiAgcHJpdmF0ZSBjb21tYW5kSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IExlYWRlclNldHRpbmdzVGFiKSB7XG4gICAgc3VwZXIocGFyZW50LmFwcCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5zZXRUZXh0KCdMZWFkZXIgSG90a2V5czogcGljayBhIGNvbW1hbmQgdG8gY3JlYXRlIGEga2V5bWFwLicpO1xuICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcodGhpcy5jb250ZW50RWwpO1xuXG4gICAgc2V0dGluZy5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1jb21tYW5kJyk7XG5cbiAgICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiB0aGlzLnBhcmVudC5vYnNpZGlhbkNvbW1hbmRzKCkpIHtcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGNvbW1hbmQuaWQsIGNvbW1hbmQubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlSG9sZGVyID0gbmV3IE9wdGlvbignU2VsZWN0IGEgQ29tbWFuZCcsICdwbGFjZWhvbGRlcicsIHRydWUpO1xuICAgICAgcGxhY2VIb2xkZXIuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICBwbGFjZUhvbGRlci5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgIHBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmFwcGVuZChwbGFjZUhvbGRlcik7XG5cbiAgICAgIGRyb3Bkb3duLnNldFZhbHVlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgZHJvcGRvd24ub25DaGFuZ2UoKHNlbGVjdGVkSWQpID0+IHtcbiAgICAgICAgdGhpcy5jb21tYW5kSWQgPSBzZWxlY3RlZElkO1xuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5zZWxlY3RFbC5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgc2V0dGluZy5hZGRCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnNldEJ1dHRvblRleHQoJ09LJyk7XG4gICAgICBidXR0b24ub25DbGljaygoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNvbW1hbmRJZCA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMuY29tbWFuZElkID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB0aGlzLmNvbW1hbmRJZCA9PT0gJydcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3JlYXRlTm90aWNlKCdTZWxlY3QgYSBjb21tYW5kIHRvIHJlZ2lzdGVyJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlciA9IG5ldyBSZWNvcmRpbmdNb2RhbCh0aGlzLnBhcmVudCwgdGhpcy5jb21tYW5kSWQpO1xuICAgICAgICByZWdpc3RlcmVyLm9wZW4oKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZW5kcmVnaW9uXG5cbmNsYXNzIExlYWRlclNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHB1YmxpYyBjb21tYW5kczogT2JzaWRpYW5Db21tYW5kW107XG4gIHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBMZWFkZXJIb3RrZXlzO1xuXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogTGVhZGVySG90a2V5cykge1xuICAgIHN1cGVyKHBsdWdpbi5hcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5hcHAgPSBwbHVnaW4uYXBwO1xuICB9XG5cbiAgcHVibGljIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoQ29tbWFuZHMoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5jb250YWluZXJFbDtcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0xlYWRlciBIb3RrZXlzIFBsdWdpbiAtIFNldHRpbmdzJyB9KTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0V4aXN0aW5nIEhvdGtleXMnIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50S2V5bWFwcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpc3BsYXlFeGlzdGluZyhpKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdOZXcgS2V5bWFwJykub25DbGljaygoKSA9PiB7XG4gICAgICAgIG5ldyBDb21tYW5kTW9kYWwodGhpcykub3BlbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaENvbW1hbmRzKCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZHMgPSBsaXN0Q29tbWFuZHModGhpcy5hcHApO1xuICB9XG5cbiAgcHVibGljIGNvbmZsaWN0cyhrZXlQcmVzc2VzOiBLZXlQcmVzc1tdKTogS2V5TWFwW10ge1xuICAgIC8vIHRvZG8gdmFsaWRhdGUgcHJvcGVybHlcbiAgICByZXR1cm4gdGhpcy5wbHVnaW4uZmluZE1hdGNoaW5nS2V5bWFwcyhrZXlQcmVzc2VzKSB8fCBbXTtcbiAgfVxuXG4gIHB1YmxpYyBvYnNpZGlhbkNvbW1hbmRzKCk6IE9ic2lkaWFuQ29tbWFuZFtdIHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kcztcbiAgfVxuXG4gIHB1YmxpYyBhZGRLZXltYXAoa2V5bWFwOiBLZXlNYXApOiB2b2lkIHtcbiAgICB3cml0ZUNvbnNvbGUoYEFkZGluZyBrZXltYXA6ICR7a2V5bWFwLnRleHQoKX1gKTtcblxuICAgIGNvbnN0IG5ld0hvdGtleXMgPSBbLi4udGhpcy5jdXJyZW50S2V5bWFwcygpXS5jb25jYXQoa2V5bWFwKTtcblxuICAgIHRoaXMuc2F2ZUtleW1hcChuZXdIb3RrZXlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVLZXltYXAocG9zaXRpb25JZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEhvdGtleXMgPSB0aGlzLmN1cnJlbnRLZXltYXBzKCk7XG4gICAgY29uc3QgdG9SZW1vdmUgPSBjdXJyZW50SG90a2V5c1twb3NpdGlvbklkXTtcbiAgICB3cml0ZUNvbnNvbGUoYFJlbW92aW5nIGtleW1hcDogJHt0b1JlbW92ZS50ZXh0KCl9YCk7XG5cbiAgICBjb25zdCBuZXdLZXltYXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRIb3RrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gcG9zaXRpb25JZCkge1xuICAgICAgICBuZXdLZXltYXAucHVzaChjdXJyZW50SG90a2V5c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlS2V5bWFwKG5ld0tleW1hcCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlS2V5bWFwKHBvc2l0aW9uSWQ6IG51bWJlciwga2V5TWFwOiBLZXlNYXApOiB2b2lkIHtcbiAgICB3cml0ZUNvbnNvbGUoYFVwZGF0aW5nIGtleW1hcCBhdCBwb3NpdGlvbiAke3Bvc2l0aW9uSWR9OiAke2tleU1hcC50ZXh0KCl9YCk7XG4gICAgY29uc3Qga2V5TWFwcyA9IFsuLi50aGlzLmN1cnJlbnRLZXltYXBzKCldO1xuICAgIGtleU1hcHNbcG9zaXRpb25JZF0gPSBrZXlNYXA7XG4gICAgdGhpcy5zYXZlS2V5bWFwKGtleU1hcHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlS2V5bWFwKGtleW1hcHM6IEtleU1hcFtdKTogdm9pZCB7XG4gICAgdGhpcy5wbHVnaW4ucGVyc2lzdEtleW1hcHMoa2V5bWFwcyk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlFeGlzdGluZyhwb3NpdGlvbklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyRWw7XG4gICAgY29uc3QgdGhpc0tleW1hcCA9IHRoaXMuY3VycmVudEtleW1hcHMoKVtwb3NpdGlvbklkXTtcblxuICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCk7XG4gICAgc2V0dGluZy5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiB0aGlzLmNvbW1hbmRzKSB7XG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihjb21tYW5kLmlkLCBjb21tYW5kLm5hbWUpO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UoKG5ld0NvbW1hbmQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3S2V5TWFwID0gS2V5TWFwLm9mKHRoaXNLZXltYXApO1xuICAgICAgICBuZXdLZXlNYXAuY29tbWFuZElEID0gbmV3Q29tbWFuZDtcbiAgICAgICAgdGhpcy51cGRhdGVLZXltYXAocG9zaXRpb25JZCwgbmV3S2V5TWFwKTtcbiAgICAgIH0pO1xuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzS2V5bWFwLmNvbW1hbmRJRCk7XG4gICAgICBkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtY29tbWFuZCcpO1xuICAgIH0pO1xuICAgIHNldHRpbmcuYWRkRXh0cmFCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uXG4gICAgICAgIC5zZXRJY29uKCdjcm9zcycpXG4gICAgICAgIC5zZXRUb29sdGlwKCdEZWxldGUgc2hvcnRjdXQnKVxuICAgICAgICAuZXh0cmFTZXR0aW5nc0VsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1kZWxldGUnKTtcblxuICAgICAgYnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUtleW1hcChwb3NpdGlvbklkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcbiAgICBjb25zdCBzZXR0aW5nQ29udHJvbCA9IHNldHRpbmcuc2V0dGluZ0VsLmNoaWxkcmVuWzBdO1xuXG4gICAgY29uc3Qga2V5U2V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5U2V0dGVyLmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuXG4gICAgY29uc3Qga2JkcyA9IHRoaXNLZXltYXAuc2VxdWVuY2UubWFwKChwcmVzcykgPT4gcHJlc3Mua2JkKCkpO1xuICAgIGtleVNldHRlci5hcHBlbmQoLi4ua2Jkcyk7XG5cbiAgICBrZXlTZXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoXzogRXZlbnQpID0+XG4gICAgICBuZXcgUmVjb3JkaW5nTW9kYWwodGhpcywgdGhpc0tleW1hcC5jb21tYW5kSUQpLm9wZW4oKSxcbiAgICApO1xuXG4gICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKGtleVNldHRlciwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMF0pO1xuXG4gICAgY29uc3QgYXBwZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhcHBlbmRUZXh0LmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1zZXR0aW5nLWFwcGVuZC10ZXh0Jyk7XG4gICAgYXBwZW5kVGV4dC5zZXRUZXh0KCd0bycpO1xuICAgIHNldHRpbmdDb250cm9sLmluc2VydEJlZm9yZShhcHBlbmRUZXh0LCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblsxXSk7XG4gIH1cblxuICBwcml2YXRlIGN1cnJlbnRTZXR0aW5ncygpOiBLZXlCaW5kaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gIH1cblxuICBwcml2YXRlIGN1cnJlbnRLZXltYXBzKCk6IEtleU1hcFtdIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2V0dGluZ3MoKS5ob3RrZXlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckhvdGtleXMgZXh0ZW5kcyBQbHVnaW4ge1xuICBwdWJsaWMgc2V0dGluZ3M6IEtleUJpbmRpbmc7XG4gIHByaXZhdGUgc2V0dGluZ3NUYWI6IExlYWRlclNldHRpbmdzVGFiO1xuICBwcml2YXRlIG1hdGNoSGFuZGxlcjogTWF0Y2hIYW5kbGVyO1xuXG4gIHB1YmxpYyBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgd3JpdGVDb25zb2xlKCdTdGFydGVkIExvYWRpbmcuJyk7XG5cbiAgICBhd2FpdCB0aGlzLmxvYWRTYXZlZFNldHRpbmdzKCk7XG4gICAgYXdhaXQgdGhpcy5yZWdpc3RlckV2ZW50c0FuZENhbGxiYWNrcygpO1xuXG4gICAgdGhpcy5zZXR0aW5nc1RhYiA9IG5ldyBMZWFkZXJTZXR0aW5nc1RhYih0aGlzKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIodGhpcy5zZXR0aW5nc1RhYik7XG4gICAgd3JpdGVDb25zb2xlKCdSZWdpc3RlcmVkIFNldHRpbmcgVGFiLicpO1xuXG4gICAgd3JpdGVDb25zb2xlKCdGaW5pc2hlZCBMb2FkaW5nLicpO1xuICB9XG5cbiAgcHVibGljIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIHdyaXRlQ29uc29sZSgnVW5sb2FkaW5nIHBsdWdpbi4nKTtcbiAgfVxuXG4gIHB1YmxpYyBpbnZva2VDb21tYW5kKGNvbW1hbmRJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvbW1hbmRJRCkge1xuICAgICAgLy8gdG9kbyByZW1vdmUgYW55IHR5cGluZ1xuICAgICAgY29uc3QgYXBwID0gdGhpcy5hcHAgYXMgYW55O1xuICAgICAgYXBwLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kQnlJZChjb21tYW5kSUQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaW5kTWF0Y2hpbmdLZXltYXBzKHByZXNzZXM6IEtleVByZXNzW10pOiBLZXlNYXBbXSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hIYW5kbGVyLmZpbmRNYXRjaGluZ0tleW1hcHMocHJlc3Nlcyk7XG4gIH1cblxuICBwdWJsaWMgcGVyc2lzdEtleW1hcHMobmV3S2V5bWFwczogS2V5TWFwW10pOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdzLmhvdGtleXMgPSBuZXdLZXltYXBzO1xuICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5tYXRjaEhhbmRsZXIuc2V0S2V5bWFwKG5ld0tleW1hcHMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU5vdGljZSgnRXJyb3Igd2hpbGUgU2F2aW5nIEtleW1hcHMuJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0ZXJFdmVudHNBbmRDYWxsYmFja3MgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgd3JpdGVDb25zb2xlKCdSZWdpc3RlcmluZyBuZWNlc3NhcnkgZXZlbnQgY2FsbGJhY2tzJyk7XG5cbiAgICBjb25zdCB3b3Jrc3BhY2VDb250YWluZXIgPSB0aGlzLmFwcC53b3Jrc3BhY2UuY29udGFpbmVyRWw7XG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KFxuICAgICAgd29ya3NwYWNlQ29udGFpbmVyLFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgdGhpcy5tYXRjaEhhbmRsZXIuaGFuZGxlS2V5RG93bixcbiAgICApO1xuICAgIHdyaXRlQ29uc29sZSgnUmVnaXN0ZXJlZCB3b3Jrc3BhY2UgXCJrZXlkb3duXCIgZXZlbnQgY2FsbGJhY2tzLicpO1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsQ29tbWFuZCA9IHtcbiAgICAgIGlkOiAncmVnaXN0ZXItbW9kYWwnLFxuICAgICAgbmFtZTogJ09wZW4gUmVnaXN0ZXIgTW9kYWwnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1RhYi5yZWZyZXNoQ29tbWFuZHMoKTtcbiAgICAgICAgbmV3IENvbW1hbmRNb2RhbCh0aGlzLnNldHRpbmdzVGFiKS5vcGVuKCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5hZGRDb21tYW5kKG9wZW5Nb2RhbENvbW1hbmQpO1xuICAgIHdyaXRlQ29uc29sZSgnUmVnaXN0ZXJlZCBvcGVuIG1vZGFsIGNvbW1hbmQnKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGxvYWRTYXZlZFNldHRpbmdzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHdyaXRlQ29uc29sZSgnTG9hZGluZyBwcmV2aW91c2x5IHNhdmVkIHNldHRpbmdzLicpO1xuXG4gICAgY29uc3Qgc2F2ZWRTZXR0aW5ncyA9IChhd2FpdCB0aGlzLmxvYWREYXRhKCkpIHx8IHt9O1xuICAgIHRyeSB7XG4gICAgICBzYXZlZFNldHRpbmdzLmhvdGtleXMgPSAoc2F2ZWRTZXR0aW5ncy5ob3RrZXlzIHx8IFtdKS5tYXAoS2V5TWFwLm9mKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBzYXZlZFNldHRpbmdzO1xuICAgICAgd3JpdGVDb25zb2xlKCdMb2FkZWQgcHJldmlvdXMgc2V0dGluZ3MuJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB3cml0ZUNvbnNvbGUoJ0EgZmFpbHVyZSBvY2N1cmVkIHdoaWxlIHBhcnNpbmcgdGhlIHNhdmVkIHNldHRpbmdzLicpO1xuICAgICAgY3JlYXRlTm90aWNlKFxuICAgICAgICAnQSBmYWlsdXJlIG9jY3VyZWQgd2hpbGUgbG9hZGluZyB0aGUgc2F2ZWQgc2V0dGluZ3MuIEZhbGxiYWNraW5nIHRvIGRlZmF1bHRzLicsXG4gICAgICApO1xuICAgICAgLy8gdG9kbyA6IFJldHJvY29tcGF0aWJpbGl0eT9cbiAgICAgIC8vICBIYXJkZXIgdGhhbiBpIHRob3VnaHQgc2luY2UgTGVhZGVyS2V5IGlzbid0IHNhdmVkIGhlcmUuXG4gICAgICAvLyAgV291bGQgbmVlZCB0byBrZWVwIHRoZSBvbGQgY29tbWFuZCAsXG4gICAgICAvLyAgbG9va3VwIHRoZSBiaW5kaW5nIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSBuZXcgb25lLlxuXG4gICAgICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICB0aGlzLm1hdGNoSGFuZGxlciA9IG5ldyBNYXRjaEhhbmRsZXIodGhpcyk7XG4gIH07XG59XG5cbi8vIHJlZ2lvbiBjb25zdHMgYW5kIHV0aWxzXG5jb25zdCBsaXN0Q29tbWFuZHMgPSAoYXBwOiBBcHApOiBPYnNpZGlhbkNvbW1hbmRbXSA9PiB7XG4gIC8vIHRvZG8gcmVtb3ZlIGFueSB0eXBlXG4gIGNvbnN0IGFueUFwcCA9IGFwcCBhcyBhbnk7XG4gIGNvbnN0IGNvbW1hbmRzID0gYW55QXBwLmNvbW1hbmRzLmNvbW1hbmRzIGFzIENvbW1hbmRNYXA7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGNvbW1hbmRzKTtcbn07XG5jb25zdCBpbnRlcnByZXRNYXRjaCA9IChiZXN0TWF0Y2g6IE9wdGlvbmFsPFRyaWVOb2RlPEtleU1hcD4+KTogTWF0Y2hLaW5kID0+IHtcbiAgaWYgKCFiZXN0TWF0Y2gpIHtcbiAgICByZXR1cm4gTWF0Y2hLaW5kLk5vTWF0Y2g7XG4gIH1cbiAgaWYgKGJlc3RNYXRjaC5pc0xlYWYoKSkge1xuICAgIHJldHVybiBNYXRjaEtpbmQuRnVsbE1hdGNoO1xuICB9XG4gIHJldHVybiBNYXRjaEtpbmQuUGFydGlhbE1hdGNoO1xufTtcbmNvbnN0IGRlZmF1bHRIb3RrZXlzOiBLZXlNYXBbXSA9IFtcbiAgbmV3IEtleU1hcCgnZWRpdG9yOmZvY3VzLWxlZnQnLCBbS2V5UHJlc3MuY3RybCgnYicpLCBLZXlQcmVzcy5qdXN0KCdoJyldKSxcbiAgbmV3IEtleU1hcCgnZWRpdG9yOmZvY3VzLXJpZ2h0JywgW0tleVByZXNzLmN0cmwoJ2InKSwgS2V5UHJlc3MuanVzdCgnbCcpXSksXG4gIG5ldyBLZXlNYXAoJ2VkaXRvcjpmb2N1cy10b3AnLCBbS2V5UHJlc3MuY3RybCgnYicpLCBLZXlQcmVzcy5qdXN0KCdrJyldKSxcbiAgbmV3IEtleU1hcCgnZWRpdG9yOmZvY3VzLWJvdHRvbScsIFtLZXlQcmVzcy5jdHJsKCdiJyksIEtleVByZXNzLmp1c3QoJ2onKV0pLFxuICBuZXcgS2V5TWFwKCdjb21tYW5kLXBhbGV0dGU6b3BlbicsIFtcbiAgICBLZXlQcmVzcy5jdHJsKCdxJyksXG4gICAgS2V5UHJlc3MuanVzdCgnMScpLFxuICAgIEtleVByZXNzLmp1c3QoJzInKSxcbiAgICBLZXlQcmVzcy5qdXN0KCcyJyksXG4gIF0pLFxuICBuZXcgS2V5TWFwKCdjb21tYW5kLXBhbGV0dGU6b3BlbicsIFtcbiAgICBLZXlQcmVzcy5jdHJsKCcgJyksXG4gICAgS2V5UHJlc3MuanVzdCgncCcpLFxuICAgIEtleVByZXNzLmp1c3QoJ2EnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCdsJyksXG4gICAgS2V5UHJlc3MuanVzdCgnbCcpLFxuICAgIEtleVByZXNzLmp1c3QoJ2UnKSxcbiAgICBLZXlQcmVzcy5qdXN0KCd0JyksXG4gICAgS2V5UHJlc3MuanVzdCgndCcpLFxuICAgIEtleVByZXNzLmp1c3QoJ2UnKSxcbiAgXSksXG5dO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBLZXlCaW5kaW5nID0ge1xuICBob3RrZXlzOiBkZWZhdWx0SG90a2V5cyxcbn07XG5jb25zdCB3cml0ZUNvbnNvbGUgPSAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnNvbGUuZGVidWcoYCBMZWFkZXIgSG90a2V5czogJHttZXNzYWdlfWApO1xufTtcbmNvbnN0IGNyZWF0ZU5vdGljZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgbmV3IE5vdGljZSgnTGVhZGVyIEhvdGtleXM6ICcgKyBtZXNzYWdlKTtcbn07XG4vLyBlbmRyZWdpb25cbiJdLCJuYW1lcyI6WyJTZXR0aW5nIiwiTW9kYWwiLCJQbHVnaW5TZXR0aW5nVGFiIiwiUGx1Z2luIiwiTm90aWNlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFB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
