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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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
            var loadedData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedData = _a.sent();
                        console.log("OVERRIDED!!!");
                        console.log(loadedData);
                        this.settings = __assign({ hotkeys: defaultHotkeys }, loadedData);
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
                        this.addSettingTab(new LeaderPluginSettingsTab(this.app, this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7XG5cdEFwcCxcblx0TW9kYWwsXG5cdE5vdGljZSxcblx0UGx1Z2luLFxuXHRQbHVnaW5TZXR0aW5nVGFiLFxuXHRTZXR0aW5nLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbmludGVyZmFjZSBDb21tYW5kIHtcblx0bmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xufVxuXG5jbGFzcyBIb3RrZXkge1xuXHRwdWJsaWMga2V5OiBzdHJpbmc7XG5cdHB1YmxpYyBtZXRhOiBib29sZWFuO1xuXHRwdWJsaWMgc2hpZnQ6IGJvb2xlYW47XG5cdHB1YmxpYyBjb21tYW5kSUQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNldHRpbmdzIHtcblx0aG90a2V5czogSG90a2V5W107XG59XG5cbmNsYXNzIEhvdGtleVRyaWUge1xuXHRjb25zdHJ1Y3RvciggaG90a2V5czogSG90a2V5W10gKSB7XG5cdC4uLlxuXHR9XG59XG5cbmNvbnN0IGRlZmF1bHRIb3RrZXlzOiBIb3RrZXlbXSA9IFtcblx0eyBrZXk6ICdoJywgbWV0YTogZmFsc2UsIHNoaWZ0OiBmYWxzZSwgY29tbWFuZElEOiAnZWRpdG9yOmZvY3VzLWxlZnQnIH0sXG5cdHsga2V5OiAnaicsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy1ib3R0b20nIH0sXG5cdHsga2V5OiAnaycsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy10b3AnIH0sXG5cdHsga2V5OiAnbCcsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy1yaWdodCcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckhvdGtleXNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXHRwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xuXG5cdHByaXZhdGUgbGVhZGVyUGVuZGluZzogYm9vbGVhbjtcblx0cHJpdmF0ZSBjbUVkaXRvcnM6IENvZGVNaXJyb3IuRWRpdG9yW107XG5cblx0cHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRsZXQgbG9hZGVkRGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcblx0XHRjb25zb2xlLmxvZyhcIk9WRVJSSURFRCEhIVwiKVxuXHRcdGNvbnNvbGUubG9nKCBsb2FkZWREYXRhIClcblx0XHR0aGlzLnNldHRpbmdzID0ge1xuXHRcdFx0aG90a2V5czogZGVmYXVsdEhvdGtleXMsXG5cdFx0XHQuLi5sb2FkZWREYXRhLFxuXHRcdH07XG5cblx0XHR0aGlzLmNtRWRpdG9ycyA9IFtdO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudChcblx0XHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbiggJ2NvZGVtaXJyb3InLCAoIGNtOiBDb2RlTWlycm9yLkVkaXRvciApID0+IHtcblx0XHRcdFx0dGhpcy5jbUVkaXRvcnMucHVzaCggY20gKTtcblx0XHRcdFx0Y20ub24oICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duICk7XG5cdFx0XHR9ICksXG5cdFx0KTtcblxuXHRcdHRoaXMuYWRkQ29tbWFuZCgge1xuXHRcdFx0XHRcdFx0XHQgaWQ6ICAgICAgICdsZWFkZXInLFxuXHRcdFx0XHRcdFx0XHQgbmFtZTogICAgICdMZWFkZXIga2V5Jyxcblx0XHRcdFx0XHRcdFx0IGNhbGxiYWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0IGNvbnNvbGUuZGVidWcoICdMZWFkZXIgcHJlc3NlZC4uLicgKTtcblx0XHRcdFx0XHRcdFx0XHQgdGhpcy5sZWFkZXJQZW5kaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0IH0sXG5cdFx0XHRcdFx0XHQgfSApO1xuXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKCBuZXcgTGVhZGVyUGx1Z2luU2V0dGluZ3NUYWIoIHRoaXMuYXBwLCB0aGlzICkgKTtcblx0fVxuXG5cdHB1YmxpYyBvbnVubG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLmNtRWRpdG9ycy5mb3JFYWNoKCAoIGNtICkgPT4ge1xuXHRcdFx0Y20ub2ZmKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93biApO1xuXHRcdH0gKTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChcblx0XHRjbTogQ29kZU1pcnJvci5FZGl0b3IsXG5cdFx0ZXZlbnQ6IEtleWJvYXJkRXZlbnQsXG5cdCk6IHZvaWQgPT4ge1xuXHRcdGlmICggIXRoaXMubGVhZGVyUGVuZGluZyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50LmtleSA9PT0gJ1NoaWZ0JyB8fCBldmVudC5rZXkgPT09ICdNZXRhJyApIHtcblx0XHRcdC8vIERvbid0IGNsZWFyIGxlYWRlclBlbmRpbmcgZm9yIGEgbWV0YSBrZXlcblx0XHRcdGNvbnNvbGUuZGVidWcoICdza2lwcGluZyBhIG1ldGEga2V5JyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjb21tYW5kRm91bmQgPSBmYWxzZTtcblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjb25zdCBldmFsdWF0aW5nSG90a2V5ID0gdGhpcy5zZXR0aW5ncy5ob3RrZXlzWyBpIF07XG5cdFx0XHRpZiAoIGV2YWx1YXRpbmdIb3RrZXkua2V5ID09PSBldmVudC5rZXkgKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQvLyBjaGVjayB0cnVlIGFuZCBmYWxzZSB0byBjYXRjaCBjb21tYW5kcyB3aXRoIG1ldGEvc2hpZnQgdW5kZWZpbmVkXG5cdFx0XHRcdFx0KCAoIGV2ZW50Lm1ldGFLZXkgJiYgZXZhbHVhdGluZ0hvdGtleS5tZXRhICkgfHxcblx0XHRcdFx0XHQgICggIWV2ZW50Lm1ldGFLZXkgJiYgIWV2YWx1YXRpbmdIb3RrZXkubWV0YSApICkgJiZcblx0XHRcdFx0XHQoICggZXZlbnQuc2hpZnRLZXkgJiYgZXZhbHVhdGluZ0hvdGtleS5zaGlmdCApIHx8XG5cdFx0XHRcdFx0ICAoICFldmVudC5zaGlmdEtleSAmJiAhZXZhbHVhdGluZ0hvdGtleS5zaGlmdCApIClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0KCB0aGlzLmFwcCBhcyBhbnkgKS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXG5cdFx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmhvdGtleXNbIGkgXS5jb21tYW5kSUQsXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbW1hbmRGb3VuZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFjb21tYW5kRm91bmQgKSB7XG5cdFx0XHRjb25zb2xlLmRlYnVnKCAnY2FuY2VsbGluZyBsZWFkZXInICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWFkZXJQZW5kaW5nID0gZmFsc2U7XG5cdH07XG59XG5cbmNsYXNzIFNldEhvdGtleU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuXHRwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRMZWFkZXI6IHN0cmluZztcblx0cHJpdmF0ZSByZWFkb25seSByZWRyYXc6ICgpID0+IHZvaWQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgc2V0TmV3S2V5OiAoIGtleTogc3RyaW5nLCBtZXRhOiBib29sZWFuLCBzaGlmdDogYm9vbGVhbiwgKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGFwcDogQXBwLFxuXHRcdGN1cnJlbnRMZWFkZXI6IHN0cmluZyxcblx0XHRyZWRyYXc6ICgpID0+IHZvaWQsXG5cdFx0c2V0TmV3S2V5OiAoIG5ld0tleTogc3RyaW5nLCBtZXRhOiBib29sZWFuLCBzaGlmdDogYm9vbGVhbiApID0+IHZvaWQsXG5cdCkge1xuXHRcdHN1cGVyKCBhcHAgKTtcblx0XHR0aGlzLmN1cnJlbnRMZWFkZXIgPSBjdXJyZW50TGVhZGVyO1xuXHRcdHRoaXMucmVkcmF3ICAgICAgICA9IHJlZHJhdztcblx0XHR0aGlzLnNldE5ld0tleSAgICAgPSBzZXROZXdLZXk7XG5cdH1cblxuXHRwdWJsaWMgb25PcGVuID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXG5cdFx0Y29uc3QgaW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XG5cdFx0aW50cm9UZXh0LnNldFRleHQoXG5cdFx0XHRgUHJlc3MgYSBrZXkgdG8gdXNlIGFzIHRoZSBob3RrZXkgYWZ0ZXIgdGhlIGxlYWRlciAoJHsgdGhpcy5jdXJyZW50TGVhZGVyIH0pIGlzIHByZXNzZWQuLi5gLFxuXHRcdCk7XG5cblx0XHRjb250ZW50RWwuYXBwZW5kQ2hpbGQoIGludHJvVGV4dCApO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24gKTtcblx0fTtcblxuXHRwdWJsaWMgb25DbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93biApO1xuXHRcdHRoaXMucmVkcmF3KCk7XG5cblx0XHRjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcblx0fTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhhbmRsZUtleURvd24gPSAoIGV2ZW50OiBLZXlib2FyZEV2ZW50ICk6IHZvaWQgPT4ge1xuXHRcdGlmICggWyAnU2hpZnQnLCAnTWV0YScsICdFc2NhcGUnIF0uY29udGFpbnMoIGV2ZW50LmtleSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0TmV3S2V5KCBldmVudC5rZXksIGV2ZW50Lm1ldGFLZXksIGV2ZW50LnNoaWZ0S2V5ICk7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHR9O1xufVxuXG5jbGFzcyBMZWFkZXJQbHVnaW5TZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogTGVhZGVySG90a2V5c1BsdWdpbjtcblx0cHJpdmF0ZSBjb21tYW5kczogQ29tbWFuZFtdO1xuXG5cdHByaXZhdGUgdGVtcE5ld0hvdGtleTogSG90a2V5O1xuXG5cdGNvbnN0cnVjdG9yKCBhcHA6IEFwcCwgcGx1Z2luOiBMZWFkZXJIb3RrZXlzUGx1Z2luICkge1xuXHRcdHN1cGVyKCBhcHAsIHBsdWdpbiApO1xuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXHR9XG5cblx0cHVibGljIGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kcyAgICAgICAgID0gdGhpcy5nZW5lcmF0ZUNvbW1hbmRMaXN0KCB0aGlzLmFwcCApO1xuXHRcdGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcblxuXHRcdGNvbnN0IGN1cnJlbnRMZWFkZXIgPSB0aGlzLmxvb2t1cEN1cnJlbnRMZWFkZXIoIHRoaXMuYXBwICk7XG5cblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCggJ2gyJywgeyB0ZXh0OiAnTGVhZGVyIEhvdGtleXMgUGx1Z2luIC0gU2V0dGluZ3MnIH0gKTtcblxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCAncCcsIHtcblx0XHRcdHRleHQ6XG5cdFx0XHRcdCdUaGUgbGVhZGVyLWhvdGtleXMgbGlzdGVkIGJlbG93IGFyZSB1c2VkIGJ5IHByZXNzaW5nIGEgY3VzdG9tICcgK1xuXHRcdFx0XHQnaG90a2V5IChjYWxsZWQgdGhlIGxlYWRlciksIHRoZW4gcmVsZWFzaW5nIGFuZCBwcmVzc2luZyB0aGUga2V5ICcgK1xuXHRcdFx0XHQnZGVmaW5lZCBmb3IgYSBwYXJ0aWN1bGFyIGNvbW1hbmQuIFRoZSBsZWFkZXIgaG90a2V5IGNhbiBiZSAnICtcblx0XHRcdFx0J2NvbmZpZ3VyZWQgaW4gdGhlIEhvdGtleXMgc2V0dGluZ3MgcGFnZSwgYW5kIGlzIGN1cnJlbnRseSBib3VuZCB0byAnICtcblx0XHRcdFx0Y3VycmVudExlYWRlciArXG5cdFx0XHRcdCcuJyxcblx0XHR9ICk7XG5cblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCggJ2gzJywgeyB0ZXh0OiAnRXhpc3RpbmcgSG90a2V5cycgfSApO1xuXG5cdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5mb3JFYWNoKCAoIGNvbmZpZ3VyZWRDb21tYW5kICkgPT4ge1xuXHRcdFx0Y29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKCBjb250YWluZXJFbCApXG5cdFx0XHRcdC5hZGREcm9wZG93biggKCBkcm9wZG93biApID0+IHtcblx0XHRcdFx0XHR0aGlzLmNvbW1hbmRzLmZvckVhY2goICggY29tbWFuZCApID0+IHtcblx0XHRcdFx0XHRcdGRyb3Bkb3duLmFkZE9wdGlvbiggY29tbWFuZC5pZCwgY29tbWFuZC5uYW1lICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGRyb3Bkb3duXG5cdFx0XHRcdFx0XHQuc2V0VmFsdWUoIGNvbmZpZ3VyZWRDb21tYW5kLmNvbW1hbmRJRCApXG5cdFx0XHRcdFx0XHQub25DaGFuZ2UoICggbmV3Q29tbWFuZCApID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIb3RrZXlDb21tYW5kSW5TZXR0aW5ncyggY29uZmlndXJlZENvbW1hbmQsIG5ld0NvbW1hbmQgKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcyggJ2xlYWRlci1ob3RrZXlzLWNvbW1hbmQnICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuYWRkRXh0cmFCdXR0b24oICggYnV0dG9uICkgPT4ge1xuXHRcdFx0XHRcdGJ1dHRvblxuXHRcdFx0XHRcdFx0LnNldEljb24oICdjcm9zcycgKVxuXHRcdFx0XHRcdFx0LnNldFRvb2x0aXAoICdEZWxldGUgc2hvcnRjdXQnIClcblx0XHRcdFx0XHRcdC5vbkNsaWNrKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGVsZXRlSG90a2V5RnJvbVNldHRpbmdzKCBjb25maWd1cmVkQ29tbWFuZCApO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BsYXkoKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRidXR0b24uZXh0cmFTZXR0aW5nc0VsLmFkZENsYXNzKCAnbGVhZGVyLWhvdGtleXMtZGVsZXRlJyApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdHNldHRpbmcuaW5mb0VsLnJlbW92ZSgpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ0NvbnRyb2wgPSBzZXR0aW5nLnNldHRpbmdFbC5jaGlsZHJlblsgMCBdO1xuXG5cdFx0XHRjb25zdCBwcmVwZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXHRcdFx0cHJlcGVuZFRleHQuYWRkQ2xhc3MoICdsZWFkZXItaG90a2V5cy1zZXR0aW5nLXByZXBlbmQtdGV4dCcgKTtcblx0XHRcdHByZXBlbmRUZXh0LnNldFRleHQoIGBVc2UgJHsgY3VycmVudExlYWRlciB9IGZvbGxvd2VkIGJ5YCApO1xuXHRcdFx0c2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKCBwcmVwZW5kVGV4dCwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bIDAgXSApO1xuXG5cdFx0XHRjb25zdCBrZXlTZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAna2JkJyApO1xuXHRcdFx0a2V5U2V0dGVyLmFkZENsYXNzKCAnc2V0dGluZy1ob3RrZXknICk7XG5cdFx0XHRrZXlTZXR0ZXIuc2V0VGV4dCggaG90a2V5VG9OYW1lKCBjb25maWd1cmVkQ29tbWFuZCApICk7XG5cdFx0XHRrZXlTZXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBlOiBFdmVudCApID0+IHtcblx0XHRcdFx0bmV3IFNldEhvdGtleU1vZGFsKFxuXHRcdFx0XHRcdHRoaXMuYXBwLFxuXHRcdFx0XHRcdGN1cnJlbnRMZWFkZXIsXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwbGF5KCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoIG5ld0tleTogc3RyaW5nLCBtZXRhOiBib29sZWFuLCBzaGlmdDogYm9vbGVhbiApID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlTmV3SG90a2V5KCBuZXdLZXksIG1ldGEsIHNoaWZ0ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGlzVmFsaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSG90a2V5SW5TZXR0aW5ncyhcblx0XHRcdFx0XHRcdFx0XHRjb25maWd1cmVkQ29tbWFuZCxcblx0XHRcdFx0XHRcdFx0XHRuZXdLZXksXG5cdFx0XHRcdFx0XHRcdFx0bWV0YSxcblx0XHRcdFx0XHRcdFx0XHRzaGlmdCxcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLm9wZW4oKTtcblx0XHRcdH0gKTtcblx0XHRcdHNldHRpbmdDb250cm9sLmluc2VydEJlZm9yZSgga2V5U2V0dGVyLCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblsgMSBdICk7XG5cblx0XHRcdGNvbnN0IGFwcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRcdGFwcGVuZFRleHQuYWRkQ2xhc3MoICdsZWFkZXItaG90a2V5cy1zZXR0aW5nLWFwcGVuZC10ZXh0JyApO1xuXHRcdFx0YXBwZW5kVGV4dC5zZXRUZXh0KCAndG8nICk7XG5cdFx0XHRzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoIGFwcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWyAyIF0gKTtcblx0XHR9ICk7XG5cblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCggJ2gzJywgeyB0ZXh0OiAnQ3JlYXRlIE5ldyBIb3RrZXknIH0gKTtcblxuXHRcdGNvbnN0IG5ld0hvdGtleVNldHRpbmcgPSBuZXcgU2V0dGluZyggY29udGFpbmVyRWwgKS5hZGREcm9wZG93bihcblx0XHRcdCggZHJvcGRvd24gKSA9PiB7XG5cdFx0XHRcdGRyb3Bkb3duLmFkZE9wdGlvbiggJ2ludmFsaWQtcGxhY2Vob2xkZXInLCAnU2VsZWN0IGEgQ29tbWFuZCcgKTtcblx0XHRcdFx0dGhpcy5jb21tYW5kcy5mb3JFYWNoKCAoIGNvbW1hbmQgKSA9PiB7XG5cdFx0XHRcdFx0ZHJvcGRvd24uYWRkT3B0aW9uKCBjb21tYW5kLmlkLCBjb21tYW5kLm5hbWUgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRkcm9wZG93bi5vbkNoYW5nZSggKCBuZXdDb21tYW5kICkgPT4ge1xuXHRcdFx0XHRcdGlmICggdGhpcy50ZW1wTmV3SG90a2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRlbXBOZXdIb3RrZXkgPSBuZXdFbXB0eUhvdGtleSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnRlbXBOZXdIb3RrZXkuY29tbWFuZElEID0gbmV3Q29tbWFuZDtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRkcm9wZG93bi5zZWxlY3RFbC5hZGRDbGFzcyggJ2xlYWRlci1ob3RrZXlzLWNvbW1hbmQnICk7XG5cdFx0XHR9LFxuXHRcdCk7XG5cblx0XHRuZXdIb3RrZXlTZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcblx0XHRjb25zdCBzZXR0aW5nQ29udHJvbCA9IG5ld0hvdGtleVNldHRpbmcuc2V0dGluZ0VsLmNoaWxkcmVuWyAwIF07XG5cblx0XHRjb25zdCBwcmVwZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXHRcdHByZXBlbmRUZXh0LmFkZENsYXNzKCAnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1wcmVwZW5kLXRleHQnICk7XG5cdFx0cHJlcGVuZFRleHQuc2V0VGV4dCggYFVzZSAkeyBjdXJyZW50TGVhZGVyIH0gZm9sbG93ZWQgYnlgICk7XG5cdFx0c2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKCBwcmVwZW5kVGV4dCwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bIDAgXSApO1xuXG5cdFx0Y29uc3Qga2V5U2V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2tiZCcgKTtcblx0XHRrZXlTZXR0ZXIuYWRkQ2xhc3MoICdzZXR0aW5nLWhvdGtleScgKTtcblx0XHRrZXlTZXR0ZXIuc2V0VGV4dCggaG90a2V5VG9OYW1lKCB0aGlzLnRlbXBOZXdIb3RrZXkgKSApO1xuXHRcdGtleVNldHRlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGU6IEV2ZW50ICkgPT4ge1xuXHRcdFx0bmV3IFNldEhvdGtleU1vZGFsKFxuXHRcdFx0XHR0aGlzLmFwcCxcblx0XHRcdFx0Y3VycmVudExlYWRlcixcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGlzcGxheSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoIG5ld0tleTogc3RyaW5nLCBtZXRhOiBib29sZWFuLCBzaGlmdDogYm9vbGVhbiApID0+IHtcblx0XHRcdFx0XHRpZiAoIHRoaXMudGVtcE5ld0hvdGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZW1wTmV3SG90a2V5ID0gbmV3RW1wdHlIb3RrZXkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy50ZW1wTmV3SG90a2V5LmtleSAgID0gbmV3S2V5O1xuXHRcdFx0XHRcdHRoaXMudGVtcE5ld0hvdGtleS5tZXRhICA9IG1ldGE7XG5cdFx0XHRcdFx0dGhpcy50ZW1wTmV3SG90a2V5LnNoaWZ0ID0gc2hpZnQ7XG5cdFx0XHRcdH0sXG5cdFx0XHQpLm9wZW4oKTtcblx0XHR9ICk7XG5cdFx0c2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKCBrZXlTZXR0ZXIsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWyAxIF0gKTtcblxuXHRcdGNvbnN0IGFwcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRhcHBlbmRUZXh0LmFkZENsYXNzKCAnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1hcHBlbmQtdGV4dCcgKTtcblx0XHRhcHBlbmRUZXh0LnNldFRleHQoICd0bycgKTtcblx0XHRzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoIGFwcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWyAyIF0gKTtcblxuXHRcdG5ldyBTZXR0aW5nKCBjb250YWluZXJFbCApLmFkZEJ1dHRvbiggKCBidXR0b24gKSA9PiB7XG5cdFx0XHRidXR0b24uc2V0QnV0dG9uVGV4dCggJ1NhdmUgTmV3IEhvdGtleScgKS5vbkNsaWNrKCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlTmV3SG90a2V5KFxuXHRcdFx0XHRcdHRoaXMudGVtcE5ld0hvdGtleS5rZXksXG5cdFx0XHRcdFx0dGhpcy50ZW1wTmV3SG90a2V5Lm1ldGEsXG5cdFx0XHRcdFx0dGhpcy50ZW1wTmV3SG90a2V5LnNoaWZ0LFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIGlzVmFsaWQgKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9yZU5ld0hvdGtleUluU2V0dGluZ3MoKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9va3VwQ3VycmVudExlYWRlciA9ICggYXBwOiBBcHAgKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBjdXN0b21LZXlzID0gKCBhcHAgYXMgYW55ICkuaG90a2V5TWFuYWdlci5jdXN0b21LZXlzO1xuXHRcdGlmICggJ2xlYWRlci1ob3RrZXlzLW9ic2lkaWFuOmxlYWRlcicgaW4gY3VzdG9tS2V5cyApIHtcblx0XHRcdHJldHVybiBjdXN0b21LZXlzWyAnbGVhZGVyLWhvdGtleXMtb2JzaWRpYW46bGVhZGVyJyBdXG5cdFx0XHRcdC5tYXAoXG5cdFx0XHRcdFx0KCBob3RrZXk6IGFueSApOiBzdHJpbmcgPT5cblx0XHRcdFx0XHRcdGhvdGtleS5tb2RpZmllcnMuam9pbiggJysnICkgKyAnKycgKyBob3RrZXkua2V5LFxuXHRcdFx0XHQpXG5cdFx0XHRcdC5qb2luKCAnIG9yICcgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJ01vZCtiJztcblx0fTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdlbmVyYXRlQ29tbWFuZExpc3QgPSAoIGFwcDogQXBwICk6IENvbW1hbmRbXSA9PiB7XG5cdFx0Y29uc3QgY29tbWFuZHM6IENvbW1hbmRbXSA9IFtdO1xuXHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCAoIGFwcCBhcyBhbnkgKS5jb21tYW5kcy5jb21tYW5kcyApICkge1xuXHRcdFx0Y29tbWFuZHMucHVzaCggeyBuYW1lOiB2YWx1ZS5uYW1lLCBpZDogdmFsdWUuaWQgfSApO1xuXHRcdH1cblx0XHRyZXR1cm4gY29tbWFuZHM7XG5cdH07XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWxpZGF0ZU5ld0hvdGtleSA9IChcblx0XHRrZXk6IHN0cmluZyxcblx0XHRtZXRhOiBib29sZWFuLFxuXHRcdHNoaWZ0OiBib29sZWFuLFxuXHQpOiBib29sZWFuID0+IHtcblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y29uc3QgaG90a2V5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5c1sgaSBdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRob3RrZXkua2V5ID09PSBrZXkgJiZcblx0XHRcdFx0aG90a2V5Lm1ldGEgPT09IG1ldGEgJiZcblx0XHRcdFx0aG90a2V5LnNoaWZ0ID09PSBzaGlmdFxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IGhvdGtleU5hbWUgPSBob3RrZXlUb05hbWUoIGhvdGtleSApO1xuXHRcdFx0XHRuZXcgTm90aWNlKCBgTGVhZGVyIGhvdGtleSAnJHsgaG90a2V5TmFtZSB9JyBpcyBhbHJlYWR5IGluIHVzZWAgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGVsZXRlSG90a2V5RnJvbVNldHRpbmdzID0gKFxuXHRcdGV4aXN0aW5nSG90a2V5OiBIb3RrZXksXG5cdCk6IHZvaWQgPT4ge1xuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjb25zdCBob3RrZXkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzWyBpIF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGhvdGtleS5rZXkgIT09IGV4aXN0aW5nSG90a2V5LmtleSB8fFxuXHRcdFx0XHRob3RrZXkubWV0YSAhPT0gZXhpc3RpbmdIb3RrZXkubWV0YSB8fFxuXHRcdFx0XHRob3RrZXkuc2hpZnQgIT09IGV4aXN0aW5nSG90a2V5LnNoaWZ0XG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnNvbGUuZGVidWcoXG5cdFx0XHRcdGBSZW1vdmluZyBsZWFkZXItaG90a2V5ICR7IGhvdGtleVRvTmFtZSggZXhpc3RpbmdIb3RrZXkgKSB9IGF0IGluZGV4ICR7IGkgfWAsXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5zcGxpY2UoIGksIDEgKTtcblx0XHR9XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEoIHRoaXMucGx1Z2luLnNldHRpbmdzICk7XG5cdH07XG5cblx0cHJpdmF0ZSByZWFkb25seSB1cGRhdGVIb3RrZXlJblNldHRpbmdzID0gKFxuXHRcdGV4aXN0aW5nSG90a2V5OiBIb3RrZXksXG5cdFx0bmV3S2V5OiBzdHJpbmcsXG5cdFx0bWV0YTogYm9vbGVhbixcblx0XHRzaGlmdDogYm9vbGVhbixcblx0KTogdm9pZCA9PiB7XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbIGkgXTtcblx0XHRcdGlmIChcblx0XHRcdFx0aG90a2V5LmtleSAhPT0gZXhpc3RpbmdIb3RrZXkua2V5IHx8XG5cdFx0XHRcdGhvdGtleS5tZXRhICE9PSBleGlzdGluZ0hvdGtleS5tZXRhIHx8XG5cdFx0XHRcdGhvdGtleS5zaGlmdCAhPT0gZXhpc3RpbmdIb3RrZXkuc2hpZnRcblx0XHRcdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc29sZS5kZWJ1Zyhcblx0XHRcdFx0YFVwZGF0aW5nIGxlYWRlci1ob3RrZXkgJHsgaG90a2V5VG9OYW1lKFxuXHRcdFx0XHRcdGV4aXN0aW5nSG90a2V5LFxuXHRcdFx0XHQpIH0gYXQgaW5kZXggJHsgaSB9IHRvICR7IG5ld0tleSB9YCxcblx0XHRcdCk7XG5cdFx0XHRob3RrZXkua2V5ICAgPSBuZXdLZXk7XG5cdFx0XHRob3RrZXkubWV0YSAgPSBtZXRhO1xuXHRcdFx0aG90a2V5LnNoaWZ0ID0gc2hpZnQ7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEoIHRoaXMucGx1Z2luLnNldHRpbmdzICk7XG5cdH07XG5cblx0cHJpdmF0ZSByZWFkb25seSB1cGRhdGVIb3RrZXlDb21tYW5kSW5TZXR0aW5ncyA9IChcblx0XHRleGlzdGluZ0hvdGtleTogSG90a2V5LFxuXHRcdG5ld0NvbW1hbmQ6IHN0cmluZyxcblx0KTogdm9pZCA9PiB7XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbIGkgXTtcblx0XHRcdGlmIChcblx0XHRcdFx0aG90a2V5LmtleSAhPT0gZXhpc3RpbmdIb3RrZXkua2V5IHx8XG5cdFx0XHRcdGhvdGtleS5tZXRhICE9PSBleGlzdGluZ0hvdGtleS5tZXRhIHx8XG5cdFx0XHRcdGhvdGtleS5zaGlmdCAhPT0gZXhpc3RpbmdIb3RrZXkuc2hpZnRcblx0XHRcdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc29sZS5kZWJ1Zyhcblx0XHRcdFx0YFVwZGF0aW5nIGxlYWRlci1ob3RrZXkgY29tbWFuZCAkeyBob3RrZXlUb05hbWUoXG5cdFx0XHRcdFx0ZXhpc3RpbmdIb3RrZXksXG5cdFx0XHRcdCkgfSBhdCBpbmRleCAkeyBpIH0gdG8gJHsgbmV3Q29tbWFuZCB9YCxcblx0XHRcdCk7XG5cdFx0XHRob3RrZXkuY29tbWFuZElEID0gbmV3Q29tbWFuZDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnBsdWdpbi5zYXZlRGF0YSggdGhpcy5wbHVnaW4uc2V0dGluZ3MgKTtcblx0fTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0b3JlTmV3SG90a2V5SW5TZXR0aW5ncyA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zb2xlLmRlYnVnKFxuXHRcdFx0YEFkZGluZyBsZWFkZXItaG90a2V5IGNvbW1hbmQgJHsgdGhpcy50ZW1wTmV3SG90a2V5IH0gdG8gJHsgdGhpcy50ZW1wTmV3SG90a2V5LmNvbW1hbmRJRCB9YCxcblx0XHQpO1xuXHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMucHVzaCggdGhpcy50ZW1wTmV3SG90a2V5ICk7XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEoIHRoaXMucGx1Z2luLnNldHRpbmdzICk7XG5cdFx0dGhpcy50ZW1wTmV3SG90a2V5ID0gbmV3RW1wdHlIb3RrZXkoKTtcblx0fTtcbn1cblxuY29uc3QgbmV3RW1wdHlIb3RrZXkgPSAoKTogSG90a2V5ID0+ICgge1xuXHRrZXk6ICAgICAgICcnLFxuXHRzaGlmdDogICAgIGZhbHNlLFxuXHRtZXRhOiAgICAgIGZhbHNlLFxuXHRjb21tYW5kSUQ6ICcnLFxufSApO1xuXG5jb25zdCBob3RrZXlUb05hbWUgPSAoIGhvdGtleTogSG90a2V5ICk6IHN0cmluZyA9PiB7XG5cdGlmICggaG90a2V5ID09PSB1bmRlZmluZWQgfHwgaG90a2V5LmtleSA9PT0gJycgKSB7XG5cdFx0cmV0dXJuICc/Jztcblx0fVxuXHRjb25zdCBrZXlUb1VzZSA9ICggKCkgPT4ge1xuXHRcdHN3aXRjaCAoIGhvdGtleS5rZXkgKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuICfihpInO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0cmV0dXJuICfihpAnO1xuXHRcdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdFx0cmV0dXJuICfihpMnO1xuXHRcdFx0Y2FzZSAnQXJyb3dVcCc6XG5cdFx0XHRcdHJldHVybiAn4oaRJztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBob3RrZXkua2V5O1xuXHRcdH1cblx0fSApKCk7XG5cdHJldHVybiAoXG5cdFx0KCBob3RrZXkubWV0YSA/ICdtZXRhKycgOiAnJyApICsgKCBob3RrZXkuc2hpZnQgPyAnc2hpZnQrJyA6ICcnICkgKyBrZXlUb1VzZVxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJNb2RhbCIsIk5vdGljZSIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFDRDtBQUNPLElBQUksUUFBUSxHQUFHLFdBQVc7QUFDakMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckQsUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3RCxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsWUFBWSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RixTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUNqQixNQUFLO0FBQ0wsSUFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLEVBQUM7QUE0QkQ7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENB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
