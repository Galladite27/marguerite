_F_LANG_JP=0
_F_LANG_EN=1
_f_lang=_F_LANG_JP

_f_lang_lut=new Object();

function _f_initMenuLangToggle() {
    setMenuItem('MENU_LANG', 300, 3, _f_getText('MENU_LANG_TOGGLE'), '_f_langToggle()', 0);
}
function _f_registerText(key, jp, en) {
    _f_lang_lut[key] = new Array(jp, en);
}
function _f_getText(key) {
    return _f_lang_lut[key][_f_lang];
}
function _f_getChars(key) {
    return _f_getText(key).length;
}
function _f_langToggle() {
    _f_lang = _f_lang===_F_LANG_JP ? _F_LANG_EN : _F_LANG_JP;
    setMenuItem('MENU_LANG', 300, 3, _f_getText('MENU_LANG_TOGGLE'), '_f_langToggle()', 0);

    // Update here!
    SHOW_AUDIOMODE()
}

// audioLib
_f_registerText('MENU_LANG_TOGGLE', 'English', '日本語');
_f_registerText('MENU_AUDIO_OFF', '無音モード', 'Sound: OFF');
_f_registerText('MENU_AUDIO_ON', '有音モード', 'Sound: ON');
_f_registerText('NOAUDIO_ALERT_1', 'ペールムーンでは不具合があるため、音声出力を停止しております。', 'Due to a technical issue with Pale Moon, audio output has been disabled.');
_f_registerText('NOAUDIO_ALERT_2', 'お使いの端末では音声出力がサポート出来ません。', 'Your device does not support audio output.');
_f_registerText('NOAUDIO_ALERT_OTHER', 'モバイル端末では音声出力をサポートしておりません。', 'Audio output is not supported on mobile devices.');

// _f_registerText('', '', '');