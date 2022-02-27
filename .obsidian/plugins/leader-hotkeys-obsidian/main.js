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

var defaultHotkeys = [
    { key: 'h', meta: false, shift: false, commandID: 'editor:focus-left' },
    { key: 'j', meta: false, shift: false, commandID: 'editor:focus-bottom' },
    { key: 'k', meta: false, shift: false, commandID: 'editor:focus-top' },
    { key: 'l', meta: false, shift: false, commandID: 'editor:focus-right' },
];
var defaultSettings = {
    hotkeys: defaultHotkeys,
};
var LeaderHotkeysPlugin = /** @class */ (function (_super) {
    __extends(LeaderHotkeysPlugin, _super);
    function LeaderHotkeysPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyDown = function (cm, event) {
            if (!_this.leaderPending) {
                return;
            }
            if (event.key === 'Shift' || event.key === 'Meta') {
                // Don't clear leaderPending for a meta key
                console.debug('skipping a meta key');
                return;
            }
            var commandFound = false;
            for (var i = 0; i < _this.settings.hotkeys.length; i++) {
                var evaluatingHotkey = _this.settings.hotkeys[i];
                if (evaluatingHotkey.key === event.key) {
                    if (
                    // check true and false to catch commands with meta/shift undefined
                    ((event.metaKey && evaluatingHotkey.meta) ||
                        (!event.metaKey && !evaluatingHotkey.meta)) &&
                        ((event.shiftKey && evaluatingHotkey.shift) ||
                            (!event.shiftKey && !evaluatingHotkey.shift))) {
                        _this.app.commands.executeCommandById(_this.settings.hotkeys[i].commandID);
                        event.preventDefault();
                        commandFound = true;
                        break;
                    }
                }
            }
            if (!commandFound) {
                console.debug('cancelling leader');
            }
            _this.leaderPending = false;
        };
        return _this;
    }
    LeaderHotkeysPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedSettings, leaderPluginSettingsTab;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        savedSettings = _a.sent();
                        console.log(savedSettings);
                        this.settings = savedSettings || defaultSettings;
                        this.cmEditors = [];
                        this.registerEvent(this.app.workspace.on('codemirror', function (cm) {
                            _this.cmEditors.push(cm);
                            cm.on('keydown', _this.handleKeyDown);
                        }));
                        this.addCommand({
                            id: 'leader',
                            name: 'Leader key',
                            callback: function () {
                                console.debug('Leader pressed...');
                                _this.leaderPending = true;
                            },
                        });
                        leaderPluginSettingsTab = new LeaderPluginSettingsTab(this.app, this);
                        this.addSettingTab(leaderPluginSettingsTab);
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaderHotkeysPlugin.prototype.onunload = function () {
        var _this = this;
        this.cmEditors.forEach(function (cm) {
            cm.off('keydown', _this.handleKeyDown);
        });
    };
    return LeaderHotkeysPlugin;
}(obsidian.Plugin));
var SetHotkeyModal = /** @class */ (function (_super) {
    __extends(SetHotkeyModal, _super);
    function SetHotkeyModal(app, currentLeader, redraw, setNewKey) {
        var _this = _super.call(this, app) || this;
        _this.onOpen = function () {
            var contentEl = _this.contentEl;
            var introText = document.createElement('p');
            introText.setText("Press a key to use as the hotkey after the leader (" + _this.currentLeader + ") is pressed...");
            contentEl.appendChild(introText);
            document.addEventListener('keydown', _this.handleKeyDown);
        };
        _this.onClose = function () {
            document.removeEventListener('keydown', _this.handleKeyDown);
            _this.redraw();
            var contentEl = _this.contentEl;
            contentEl.empty();
        };
        _this.handleKeyDown = function (event) {
            if (['Shift', 'Meta', 'Escape'].contains(event.key)) {
                return;
            }
            _this.setNewKey(event.key, event.metaKey, event.shiftKey);
            _this.close();
        };
        _this.currentLeader = currentLeader;
        _this.redraw = redraw;
        _this.setNewKey = setNewKey;
        return _this;
    }
    return SetHotkeyModal;
}(obsidian.Modal));
var LeaderPluginSettingsTab = /** @class */ (function (_super) {
    __extends(LeaderPluginSettingsTab, _super);
    function LeaderPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.lookupCurrentLeader = function (app) {
            var customKeys = app.hotkeyManager.customKeys;
            if ('leader-hotkeys-obsidian:leader' in customKeys) {
                return customKeys['leader-hotkeys-obsidian:leader']
                    .map(function (hotkey) {
                    return hotkey.modifiers.join('+') + '+' + hotkey.key;
                })
                    .join(' or ');
            }
            return 'Mod+b';
        };
        _this.generateCommandList = function (app) {
            var commands = [];
            for (var _i = 0, _a = Object.entries(app.commands.commands); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                commands.push({ name: value.name, id: value.id });
            }
            return commands;
        };
        _this.validateNewHotkey = function (key, meta, shift) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key === key &&
                    hotkey.meta === meta &&
                    hotkey.shift === shift) {
                    var hotkeyName = hotkeyToName(hotkey);
                    new obsidian.Notice("Leader hotkey '" + hotkeyName + "' is already in use");
                    return false;
                }
            }
            return true;
        };
        _this.deleteHotkeyFromSettings = function (existingHotkey) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Removing leader-hotkey " + hotkeyToName(existingHotkey) + " at index " + i);
                _this.plugin.settings.hotkeys.splice(i, 1);
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.updateHotkeyInSettings = function (existingHotkey, newKey, meta, shift) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Updating leader-hotkey " + hotkeyToName(existingHotkey) + " at index " + i + " to " + newKey);
                hotkey.key = newKey;
                hotkey.meta = meta;
                hotkey.shift = shift;
                break;
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.updateHotkeyCommandInSettings = function (existingHotkey, newCommand) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Updating leader-hotkey command " + hotkeyToName(existingHotkey) + " at index " + i + " to " + newCommand);
                hotkey.commandID = newCommand;
                break;
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.storeNewHotkeyInSettings = function () {
            console.debug("Adding leader-hotkey command " + _this.tempNewHotkey + " to " + _this.tempNewHotkey.commandID);
            _this.plugin.settings.hotkeys.push(_this.tempNewHotkey);
            _this.plugin.saveData(_this.plugin.settings);
            _this.tempNewHotkey = newEmptyHotkey();
        };
        _this.plugin = plugin;
        return _this;
    }
    LeaderPluginSettingsTab.prototype.display = function () {
        var _this = this;
        this.commands = this.generateCommandList(this.app);
        var containerEl = this.containerEl;
        containerEl.empty();
        var currentLeader = this.lookupCurrentLeader(this.app);
        containerEl.createEl('h2', { text: 'Leader Hotkeys Plugin - Settings' });
        containerEl.createEl('p', {
            text: 'The leader-hotkeys listed below are used by pressing a custom ' +
                'hotkey (called the leader), then releasing and pressing the key ' +
                'defined for a particular command. The leader hotkey can be ' +
                'configured in the Hotkeys settings page, and is currently bound to ' +
                currentLeader +
                '.',
        });
        containerEl.createEl('h3', { text: 'Existing Hotkeys' });
        this.plugin.settings.hotkeys.forEach(function (configuredCommand) {
            var setting = new obsidian.Setting(containerEl)
                .addDropdown(function (dropdown) {
                _this.commands.forEach(function (command) {
                    dropdown.addOption(command.id, command.name);
                });
                dropdown
                    .setValue(configuredCommand.commandID)
                    .onChange(function (newCommand) {
                    _this.updateHotkeyCommandInSettings(configuredCommand, newCommand);
                });
                dropdown.selectEl.addClass('leader-hotkeys-command');
            })
                .addExtraButton(function (button) {
                button
                    .setIcon('cross')
                    .setTooltip('Delete shortcut')
                    .onClick(function () {
                    _this.deleteHotkeyFromSettings(configuredCommand);
                    _this.display();
                });
                button.extraSettingsEl.addClass('leader-hotkeys-delete');
            });
            setting.infoEl.remove();
            var settingControl = setting.settingEl.children[0];
            var prependText = document.createElement('span');
            prependText.addClass('leader-hotkeys-setting-prepend-text');
            prependText.setText("Use " + currentLeader + " followed by");
            settingControl.insertBefore(prependText, settingControl.children[0]);
            var keySetter = document.createElement('kbd');
            keySetter.addClass('setting-hotkey');
            keySetter.setText(hotkeyToName(configuredCommand));
            keySetter.addEventListener('click', function (e) {
                new SetHotkeyModal(_this.app, currentLeader, function () {
                    _this.display();
                }, function (newKey, meta, shift) {
                    var isValid = _this.validateNewHotkey(newKey, meta, shift);
                    if (isValid) {
                        _this.updateHotkeyInSettings(configuredCommand, newKey, meta, shift);
                    }
                }).open();
            });
            settingControl.insertBefore(keySetter, settingControl.children[1]);
            var appendText = document.createElement('span');
            appendText.addClass('leader-hotkeys-setting-append-text');
            appendText.setText('to');
            settingControl.insertBefore(appendText, settingControl.children[2]);
        });
        containerEl.createEl('h3', { text: 'Create New Hotkey' });
        var newHotkeySetting = new obsidian.Setting(containerEl).addDropdown(function (dropdown) {
            dropdown.addOption('invalid-placeholder', 'Select a Command');
            _this.commands.forEach(function (command) {
                dropdown.addOption(command.id, command.name);
            });
            dropdown.onChange(function (newCommand) {
                if (_this.tempNewHotkey === undefined) {
                    _this.tempNewHotkey = newEmptyHotkey();
                }
                _this.tempNewHotkey.commandID = newCommand;
            });
            dropdown.selectEl.addClass('leader-hotkeys-command');
        });
        newHotkeySetting.infoEl.remove();
        var settingControl = newHotkeySetting.settingEl.children[0];
        var prependText = document.createElement('span');
        prependText.addClass('leader-hotkeys-setting-prepend-text');
        prependText.setText("Use " + currentLeader + " followed by");
        settingControl.insertBefore(prependText, settingControl.children[0]);
        var keySetter = document.createElement('kbd');
        keySetter.addClass('setting-hotkey');
        keySetter.setText(hotkeyToName(this.tempNewHotkey));
        keySetter.addEventListener('click', function (e) {
            new SetHotkeyModal(_this.app, currentLeader, function () {
                _this.display();
            }, function (newKey, meta, shift) {
                if (_this.tempNewHotkey === undefined) {
                    _this.tempNewHotkey = newEmptyHotkey();
                }
                _this.tempNewHotkey.key = newKey;
                _this.tempNewHotkey.meta = meta;
                _this.tempNewHotkey.shift = shift;
            }).open();
        });
        settingControl.insertBefore(keySetter, settingControl.children[1]);
        var appendText = document.createElement('span');
        appendText.addClass('leader-hotkeys-setting-append-text');
        appendText.setText('to');
        settingControl.insertBefore(appendText, settingControl.children[2]);
        new obsidian.Setting(containerEl).addButton(function (button) {
            button.setButtonText('Save New Hotkey').onClick(function () {
                var isValid = _this.validateNewHotkey(_this.tempNewHotkey.key, _this.tempNewHotkey.meta, _this.tempNewHotkey.shift);
                if (isValid) {
                    _this.storeNewHotkeyInSettings();
                    _this.display();
                }
            });
        });
    };
    return LeaderPluginSettingsTab;
}(obsidian.PluginSettingTab));
var newEmptyHotkey = function () { return ({
    key: '',
    shift: false,
    meta: false,
    commandID: '',
}); };
var hotkeyToName = function (hotkey) {
    if (hotkey === undefined || hotkey.key === '') {
        return '?';
    }
    var keyToUse = (function () {
        switch (hotkey.key) {
            case 'ArrowRight':
                return '→';
            case 'ArrowLeft':
                return '←';
            case 'ArrowDown':
                return '↓';
            case 'ArrowUp':
                return '↑';
            default:
                return hotkey.key;
        }
    })();
    return ((hotkey.meta ? 'meta+' : '') + (hotkey.shift ? 'shift+' : '') + keyToUse);
};

module.exports = LeaderHotkeysPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCwgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCB9IGZyb20gJ29ic2lkaWFuJztcblxuaW50ZXJmYWNlIENvbW1hbmQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNsYXNzIEhvdGtleSB7XG4gIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgcHVibGljIG1ldGE6IGJvb2xlYW47XG4gIHB1YmxpYyBzaGlmdDogYm9vbGVhbjtcbiAgcHVibGljIGNvbW1hbmRJRDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xuICBob3RrZXlzOiBIb3RrZXlbXTtcbn1cblxuY29uc3QgZGVmYXVsdEhvdGtleXM6IEhvdGtleVtdID0gW1xuICB7IGtleTogJ2gnLCBtZXRhOiBmYWxzZSwgc2hpZnQ6IGZhbHNlLCBjb21tYW5kSUQ6ICdlZGl0b3I6Zm9jdXMtbGVmdCcgfSxcbiAgeyBrZXk6ICdqJywgbWV0YTogZmFsc2UsIHNoaWZ0OiBmYWxzZSwgY29tbWFuZElEOiAnZWRpdG9yOmZvY3VzLWJvdHRvbScgfSxcbiAgeyBrZXk6ICdrJywgbWV0YTogZmFsc2UsIHNoaWZ0OiBmYWxzZSwgY29tbWFuZElEOiAnZWRpdG9yOmZvY3VzLXRvcCcgfSxcbiAgeyBrZXk6ICdsJywgbWV0YTogZmFsc2UsIHNoaWZ0OiBmYWxzZSwgY29tbWFuZElEOiAnZWRpdG9yOmZvY3VzLXJpZ2h0JyB9LFxuXTtcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBTZXR0aW5ncyA9IHtcbiAgaG90a2V5czogZGVmYXVsdEhvdGtleXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJIb3RrZXlzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcblxuICBwcml2YXRlIGxlYWRlclBlbmRpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgY21FZGl0b3JzOiBDb2RlTWlycm9yLkVkaXRvcltdO1xuXG4gIHB1YmxpYyBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2F2ZWRTZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICBjb25zb2xlLmxvZyggc2F2ZWRTZXR0aW5ncylcbiAgICB0aGlzLnNldHRpbmdzICAgICA9IHNhdmVkU2V0dGluZ3MgfHwgZGVmYXVsdFNldHRpbmdzO1xuXG4gICAgdGhpcy5jbUVkaXRvcnMgPSBbXTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2NvZGVtaXJyb3InLCAoY206IENvZGVNaXJyb3IuRWRpdG9yKSA9PiB7XG4gICAgICAgIHRoaXMuY21FZGl0b3JzLnB1c2goY20pO1xuICAgICAgICBjbS5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbGVhZGVyJyxcbiAgICAgIG5hbWU6ICdMZWFkZXIga2V5JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0xlYWRlciBwcmVzc2VkLi4uJyk7XG4gICAgICAgIHRoaXMubGVhZGVyUGVuZGluZyA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdmFyIGxlYWRlclBsdWdpblNldHRpbmdzVGFiID0gbmV3IExlYWRlclBsdWdpblNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobGVhZGVyUGx1Z2luU2V0dGluZ3NUYWIpO1xuICB9XG4gIHB1YmxpYyBvbnVubG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNtRWRpdG9ycy5mb3JFYWNoKChjbSkgPT4ge1xuICAgICAgY20ub2ZmKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnQsXG4gICk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5sZWFkZXJQZW5kaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1NoaWZ0JyB8fCBldmVudC5rZXkgPT09ICdNZXRhJykge1xuICAgICAgLy8gRG9uJ3QgY2xlYXIgbGVhZGVyUGVuZGluZyBmb3IgYSBtZXRhIGtleVxuICAgICAgY29uc29sZS5kZWJ1Zygnc2tpcHBpbmcgYSBtZXRhIGtleScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb21tYW5kRm91bmQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0dGluZ3MuaG90a2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZXZhbHVhdGluZ0hvdGtleSA9IHRoaXMuc2V0dGluZ3MuaG90a2V5c1tpXTtcbiAgICAgIGlmIChldmFsdWF0aW5nSG90a2V5LmtleSA9PT0gZXZlbnQua2V5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBjaGVjayB0cnVlIGFuZCBmYWxzZSB0byBjYXRjaCBjb21tYW5kcyB3aXRoIG1ldGEvc2hpZnQgdW5kZWZpbmVkXG4gICAgICAgICAgKChldmVudC5tZXRhS2V5ICYmIGV2YWx1YXRpbmdIb3RrZXkubWV0YSkgfHxcbiAgICAgICAgICAgICghZXZlbnQubWV0YUtleSAmJiAhZXZhbHVhdGluZ0hvdGtleS5tZXRhKSkgJiZcbiAgICAgICAgICAoKGV2ZW50LnNoaWZ0S2V5ICYmIGV2YWx1YXRpbmdIb3RrZXkuc2hpZnQpIHx8XG4gICAgICAgICAgICAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmFsdWF0aW5nSG90a2V5LnNoaWZ0KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgKHRoaXMuYXBwIGFzIGFueSkuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5ob3RrZXlzW2ldLmNvbW1hbmRJRCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29tbWFuZEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29tbWFuZEZvdW5kKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdjYW5jZWxsaW5nIGxlYWRlcicpO1xuICAgIH1cblxuICAgIHRoaXMubGVhZGVyUGVuZGluZyA9IGZhbHNlO1xuICB9O1xufVxuXG5jbGFzcyBTZXRIb3RrZXlNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGVhZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVkcmF3OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIHJlYWRvbmx5IHNldE5ld0tleTogKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG1ldGE6IGJvb2xlYW4sXG4gICAgc2hpZnQ6IGJvb2xlYW4sXG4gICkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBjdXJyZW50TGVhZGVyOiBzdHJpbmcsXG4gICAgcmVkcmF3OiAoKSA9PiB2b2lkLFxuICAgIHNldE5ld0tleTogKG5ld0tleTogc3RyaW5nLCBtZXRhOiBib29sZWFuLCBzaGlmdDogYm9vbGVhbikgPT4gdm9pZCxcbiAgKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLmN1cnJlbnRMZWFkZXIgPSBjdXJyZW50TGVhZGVyO1xuICAgIHRoaXMucmVkcmF3ID0gcmVkcmF3O1xuICAgIHRoaXMuc2V0TmV3S2V5ID0gc2V0TmV3S2V5O1xuICB9XG5cbiAgcHVibGljIG9uT3BlbiA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnRyb1RleHQuc2V0VGV4dChcbiAgICAgIGBQcmVzcyBhIGtleSB0byB1c2UgYXMgdGhlIGhvdGtleSBhZnRlciB0aGUgbGVhZGVyICgke3RoaXMuY3VycmVudExlYWRlcn0pIGlzIHByZXNzZWQuLi5gLFxuICAgICk7XG5cbiAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNsb3NlID0gKCk6IHZvaWQgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIHRoaXMucmVkcmF3KCk7XG5cbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoWydTaGlmdCcsICdNZXRhJywgJ0VzY2FwZSddLmNvbnRhaW5zKGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldE5ld0tleShldmVudC5rZXksIGV2ZW50Lm1ldGFLZXksIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH07XG59XG5cbmNsYXNzIExlYWRlclBsdWdpblNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBMZWFkZXJIb3RrZXlzUGx1Z2luO1xuICBwcml2YXRlIGNvbW1hbmRzOiBDb21tYW5kW107XG5cbiAgcHJpdmF0ZSB0ZW1wTmV3SG90a2V5OiBIb3RrZXk7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTGVhZGVySG90a2V5c1BsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZHMgPSB0aGlzLmdlbmVyYXRlQ29tbWFuZExpc3QodGhpcy5hcHApO1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRMZWFkZXIgPSB0aGlzLmxvb2t1cEN1cnJlbnRMZWFkZXIodGhpcy5hcHApO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTGVhZGVyIEhvdGtleXMgUGx1Z2luIC0gU2V0dGluZ3MnIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OlxuICAgICAgICAnVGhlIGxlYWRlci1ob3RrZXlzIGxpc3RlZCBiZWxvdyBhcmUgdXNlZCBieSBwcmVzc2luZyBhIGN1c3RvbSAnICtcbiAgICAgICAgJ2hvdGtleSAoY2FsbGVkIHRoZSBsZWFkZXIpLCB0aGVuIHJlbGVhc2luZyBhbmQgcHJlc3NpbmcgdGhlIGtleSAnICtcbiAgICAgICAgJ2RlZmluZWQgZm9yIGEgcGFydGljdWxhciBjb21tYW5kLiBUaGUgbGVhZGVyIGhvdGtleSBjYW4gYmUgJyArXG4gICAgICAgICdjb25maWd1cmVkIGluIHRoZSBIb3RrZXlzIHNldHRpbmdzIHBhZ2UsIGFuZCBpcyBjdXJyZW50bHkgYm91bmQgdG8gJyArXG4gICAgICAgIGN1cnJlbnRMZWFkZXIgK1xuICAgICAgICAnLicsXG4gICAgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdFeGlzdGluZyBIb3RrZXlzJyB9KTtcblxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMuZm9yRWFjaCgoY29uZmlndXJlZENvbW1hbmQpID0+IHtcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgIHRoaXMuY29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGNvbW1hbmQuaWQsIGNvbW1hbmQubmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAgIC5zZXRWYWx1ZShjb25maWd1cmVkQ29tbWFuZC5jb21tYW5kSUQpXG4gICAgICAgICAgICAub25DaGFuZ2UoKG5ld0NvbW1hbmQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVIb3RrZXlDb21tYW5kSW5TZXR0aW5ncyhjb25maWd1cmVkQ29tbWFuZCwgbmV3Q29tbWFuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtY29tbWFuZCcpO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkRXh0cmFCdXR0b24oKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgLnNldEljb24oJ2Nyb3NzJylcbiAgICAgICAgICAgIC5zZXRUb29sdGlwKCdEZWxldGUgc2hvcnRjdXQnKVxuICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUhvdGtleUZyb21TZXR0aW5ncyhjb25maWd1cmVkQ29tbWFuZCk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnV0dG9uLmV4dHJhU2V0dGluZ3NFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtZGVsZXRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcbiAgICAgIGNvbnN0IHNldHRpbmdDb250cm9sID0gc2V0dGluZy5zZXR0aW5nRWwuY2hpbGRyZW5bMF07XG5cbiAgICAgIGNvbnN0IHByZXBlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgcHJlcGVuZFRleHQuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLXNldHRpbmctcHJlcGVuZC10ZXh0Jyk7XG4gICAgICBwcmVwZW5kVGV4dC5zZXRUZXh0KGBVc2UgJHtjdXJyZW50TGVhZGVyfSBmb2xsb3dlZCBieWApO1xuICAgICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKHByZXBlbmRUZXh0LCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblswXSk7XG5cbiAgICAgIGNvbnN0IGtleVNldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2tiZCcpO1xuICAgICAga2V5U2V0dGVyLmFkZENsYXNzKCdzZXR0aW5nLWhvdGtleScpO1xuICAgICAga2V5U2V0dGVyLnNldFRleHQoaG90a2V5VG9OYW1lKGNvbmZpZ3VyZWRDb21tYW5kKSk7XG4gICAgICBrZXlTZXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgbmV3IFNldEhvdGtleU1vZGFsKFxuICAgICAgICAgIHRoaXMuYXBwLFxuICAgICAgICAgIGN1cnJlbnRMZWFkZXIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAobmV3S2V5OiBzdHJpbmcsIG1ldGE6IGJvb2xlYW4sIHNoaWZ0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZU5ld0hvdGtleShuZXdLZXksIG1ldGEsIHNoaWZ0KTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlSG90a2V5SW5TZXR0aW5ncyhcbiAgICAgICAgICAgICAgICBjb25maWd1cmVkQ29tbWFuZCxcbiAgICAgICAgICAgICAgICBuZXdLZXksXG4gICAgICAgICAgICAgICAgbWV0YSxcbiAgICAgICAgICAgICAgICBzaGlmdCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICApLm9wZW4oKTtcbiAgICAgIH0pO1xuICAgICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKGtleVNldHRlciwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMV0pO1xuXG4gICAgICBjb25zdCBhcHBlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgYXBwZW5kVGV4dC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1hcHBlbmQtdGV4dCcpO1xuICAgICAgYXBwZW5kVGV4dC5zZXRUZXh0KCd0bycpO1xuICAgICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKGFwcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzJdKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0NyZWF0ZSBOZXcgSG90a2V5JyB9KTtcblxuICAgIGNvbnN0IG5ld0hvdGtleVNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuYWRkRHJvcGRvd24oXG4gICAgICAoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKCdpbnZhbGlkLXBsYWNlaG9sZGVyJywgJ1NlbGVjdCBhIENvbW1hbmQnKTtcbiAgICAgICAgdGhpcy5jb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGNvbW1hbmQuaWQsIGNvbW1hbmQubmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkcm9wZG93bi5vbkNoYW5nZSgobmV3Q29tbWFuZCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRlbXBOZXdIb3RrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5ID0gbmV3RW1wdHlIb3RrZXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5LmNvbW1hbmRJRCA9IG5ld0NvbW1hbmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtY29tbWFuZCcpO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgbmV3SG90a2V5U2V0dGluZy5pbmZvRWwucmVtb3ZlKCk7XG4gICAgY29uc3Qgc2V0dGluZ0NvbnRyb2wgPSBuZXdIb3RrZXlTZXR0aW5nLnNldHRpbmdFbC5jaGlsZHJlblswXTtcblxuICAgIGNvbnN0IHByZXBlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByZXBlbmRUZXh0LmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1zZXR0aW5nLXByZXBlbmQtdGV4dCcpO1xuICAgIHByZXBlbmRUZXh0LnNldFRleHQoYFVzZSAke2N1cnJlbnRMZWFkZXJ9IGZvbGxvd2VkIGJ5YCk7XG4gICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKHByZXBlbmRUZXh0LCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblswXSk7XG5cbiAgICBjb25zdCBrZXlTZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdrYmQnKTtcbiAgICBrZXlTZXR0ZXIuYWRkQ2xhc3MoJ3NldHRpbmctaG90a2V5Jyk7XG4gICAga2V5U2V0dGVyLnNldFRleHQoaG90a2V5VG9OYW1lKHRoaXMudGVtcE5ld0hvdGtleSkpO1xuICAgIGtleVNldHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4ge1xuICAgICAgbmV3IFNldEhvdGtleU1vZGFsKFxuICAgICAgICB0aGlzLmFwcCxcbiAgICAgICAgY3VycmVudExlYWRlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICB9LFxuICAgICAgICAobmV3S2V5OiBzdHJpbmcsIG1ldGE6IGJvb2xlYW4sIHNoaWZ0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudGVtcE5ld0hvdGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkgPSBuZXdFbXB0eUhvdGtleSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkua2V5ID0gbmV3S2V5O1xuICAgICAgICAgIHRoaXMudGVtcE5ld0hvdGtleS5tZXRhID0gbWV0YTtcbiAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkuc2hpZnQgPSBzaGlmdDtcbiAgICAgICAgfSxcbiAgICAgICkub3BlbigpO1xuICAgIH0pO1xuICAgIHNldHRpbmdDb250cm9sLmluc2VydEJlZm9yZShrZXlTZXR0ZXIsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzFdKTtcblxuICAgIGNvbnN0IGFwcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYXBwZW5kVGV4dC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1hcHBlbmQtdGV4dCcpO1xuICAgIGFwcGVuZFRleHQuc2V0VGV4dCgndG8nKTtcbiAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoYXBwZW5kVGV4dCwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMl0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLmFkZEJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnU2F2ZSBOZXcgSG90a2V5Jykub25DbGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlTmV3SG90a2V5KFxuICAgICAgICAgIHRoaXMudGVtcE5ld0hvdGtleS5rZXksXG4gICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5Lm1ldGEsXG4gICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5LnNoaWZ0LFxuICAgICAgICApO1xuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmVOZXdIb3RrZXlJblNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsb29rdXBDdXJyZW50TGVhZGVyID0gKGFwcDogQXBwKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjdXN0b21LZXlzID0gKGFwcCBhcyBhbnkpLmhvdGtleU1hbmFnZXIuY3VzdG9tS2V5cztcbiAgICBpZiAoJ2xlYWRlci1ob3RrZXlzLW9ic2lkaWFuOmxlYWRlcicgaW4gY3VzdG9tS2V5cykge1xuICAgICAgcmV0dXJuIGN1c3RvbUtleXNbJ2xlYWRlci1ob3RrZXlzLW9ic2lkaWFuOmxlYWRlciddXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKGhvdGtleTogYW55KTogc3RyaW5nID0+XG4gICAgICAgICAgICBob3RrZXkubW9kaWZpZXJzLmpvaW4oJysnKSArICcrJyArIGhvdGtleS5rZXksXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJyBvciAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ01vZCtiJztcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGdlbmVyYXRlQ29tbWFuZExpc3QgPSAoYXBwOiBBcHApOiBDb21tYW5kW10gPT4ge1xuICAgIGNvbnN0IGNvbW1hbmRzOiBDb21tYW5kW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcygoYXBwIGFzIGFueSkuY29tbWFuZHMuY29tbWFuZHMpKSB7XG4gICAgICBjb21tYW5kcy5wdXNoKHsgbmFtZTogdmFsdWUubmFtZSwgaWQ6IHZhbHVlLmlkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29tbWFuZHM7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSB2YWxpZGF0ZU5ld0hvdGtleSA9IChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBtZXRhOiBib29sZWFuLFxuICAgIHNoaWZ0OiBib29sZWFuLFxuICApOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGhvdGtleS5rZXkgPT09IGtleSAmJlxuICAgICAgICBob3RrZXkubWV0YSA9PT0gbWV0YSAmJlxuICAgICAgICBob3RrZXkuc2hpZnQgPT09IHNoaWZ0XG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaG90a2V5TmFtZSA9IGhvdGtleVRvTmFtZShob3RrZXkpO1xuICAgICAgICBuZXcgTm90aWNlKGBMZWFkZXIgaG90a2V5ICcke2hvdGtleU5hbWV9JyBpcyBhbHJlYWR5IGluIHVzZWApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZWxldGVIb3RrZXlGcm9tU2V0dGluZ3MgPSAoXG4gICAgZXhpc3RpbmdIb3RrZXk6IEhvdGtleSxcbiAgKTogdm9pZCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3RrZXkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBob3RrZXkua2V5ICE9PSBleGlzdGluZ0hvdGtleS5rZXkgfHxcbiAgICAgICAgaG90a2V5Lm1ldGEgIT09IGV4aXN0aW5nSG90a2V5Lm1ldGEgfHxcbiAgICAgICAgaG90a2V5LnNoaWZ0ICE9PSBleGlzdGluZ0hvdGtleS5zaGlmdFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICBgUmVtb3ZpbmcgbGVhZGVyLWhvdGtleSAke2hvdGtleVRvTmFtZShleGlzdGluZ0hvdGtleSl9IGF0IGluZGV4ICR7aX1gLFxuICAgICAgKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSB1cGRhdGVIb3RrZXlJblNldHRpbmdzID0gKFxuICAgIGV4aXN0aW5nSG90a2V5OiBIb3RrZXksXG4gICAgbmV3S2V5OiBzdHJpbmcsXG4gICAgbWV0YTogYm9vbGVhbixcbiAgICBzaGlmdDogYm9vbGVhbixcbiAgKTogdm9pZCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3RrZXkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBob3RrZXkua2V5ICE9PSBleGlzdGluZ0hvdGtleS5rZXkgfHxcbiAgICAgICAgaG90a2V5Lm1ldGEgIT09IGV4aXN0aW5nSG90a2V5Lm1ldGEgfHxcbiAgICAgICAgaG90a2V5LnNoaWZ0ICE9PSBleGlzdGluZ0hvdGtleS5zaGlmdFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICBgVXBkYXRpbmcgbGVhZGVyLWhvdGtleSAke2hvdGtleVRvTmFtZShcbiAgICAgICAgICBleGlzdGluZ0hvdGtleSxcbiAgICAgICAgKX0gYXQgaW5kZXggJHtpfSB0byAke25ld0tleX1gLFxuICAgICAgKTtcbiAgICAgIGhvdGtleS5rZXkgPSBuZXdLZXk7XG4gICAgICBob3RrZXkubWV0YSA9IG1ldGE7XG4gICAgICBob3RrZXkuc2hpZnQgPSBzaGlmdDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSB1cGRhdGVIb3RrZXlDb21tYW5kSW5TZXR0aW5ncyA9IChcbiAgICBleGlzdGluZ0hvdGtleTogSG90a2V5LFxuICAgIG5ld0NvbW1hbmQ6IHN0cmluZyxcbiAgKTogdm9pZCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3RrZXkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBob3RrZXkua2V5ICE9PSBleGlzdGluZ0hvdGtleS5rZXkgfHxcbiAgICAgICAgaG90a2V5Lm1ldGEgIT09IGV4aXN0aW5nSG90a2V5Lm1ldGEgfHxcbiAgICAgICAgaG90a2V5LnNoaWZ0ICE9PSBleGlzdGluZ0hvdGtleS5zaGlmdFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICBgVXBkYXRpbmcgbGVhZGVyLWhvdGtleSBjb21tYW5kICR7aG90a2V5VG9OYW1lKFxuICAgICAgICAgIGV4aXN0aW5nSG90a2V5LFxuICAgICAgICApfSBhdCBpbmRleCAke2l9IHRvICR7bmV3Q29tbWFuZH1gLFxuICAgICAgKTtcbiAgICAgIGhvdGtleS5jb21tYW5kSUQgPSBuZXdDb21tYW5kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN0b3JlTmV3SG90a2V5SW5TZXR0aW5ncyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgYEFkZGluZyBsZWFkZXItaG90a2V5IGNvbW1hbmQgJHt0aGlzLnRlbXBOZXdIb3RrZXl9IHRvICR7dGhpcy50ZW1wTmV3SG90a2V5LmNvbW1hbmRJRH1gLFxuICAgICk7XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5wdXNoKHRoaXMudGVtcE5ld0hvdGtleSk7XG4gICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgIHRoaXMudGVtcE5ld0hvdGtleSA9IG5ld0VtcHR5SG90a2V5KCk7XG4gIH07XG59XG5cbmNvbnN0IG5ld0VtcHR5SG90a2V5ID0gKCk6IEhvdGtleSA9PiAoe1xuICBrZXk6ICcnLFxuICBzaGlmdDogZmFsc2UsXG4gIG1ldGE6IGZhbHNlLFxuICBjb21tYW5kSUQ6ICcnLFxufSk7XG5cbmNvbnN0IGhvdGtleVRvTmFtZSA9IChob3RrZXk6IEhvdGtleSk6IHN0cmluZyA9PiB7XG4gIGlmIChob3RrZXkgPT09IHVuZGVmaW5lZCB8fCBob3RrZXkua2V5ID09PSAnJykge1xuICAgIHJldHVybiAnPyc7XG4gIH1cbiAgY29uc3Qga2V5VG9Vc2UgPSAoKCkgPT4ge1xuICAgIHN3aXRjaCAoaG90a2V5LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHJldHVybiAn4oaSJztcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHJldHVybiAn4oaQJztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHJldHVybiAn4oaTJztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICByZXR1cm4gJ+KGkSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaG90a2V5LmtleTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiAoXG4gICAgKGhvdGtleS5tZXRhID8gJ21ldGErJyA6ICcnKSArIChob3RrZXkuc2hpZnQgPyAnc2hpZnQrJyA6ICcnKSArIGtleVRvVXNlXG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlBsdWdpbiIsIk1vZGFsIiwiTm90aWNlIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUs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
