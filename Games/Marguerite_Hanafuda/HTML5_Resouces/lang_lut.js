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

    var e;

    // Header bar
    SHOW_AUDIOMODE();
    e=document.getElementById('MENUBAR_RESTART');
    if (e) { e.innerHTML = _f_getText('MENU_RETURN'); }
    _f_toggle_sprite_disp(_f_toggle_sprite_last_mode);

    // Atract
    e=document.getElementById('TITLE1');
    if (e) { e.innerHTML = _f_getText('ATRACT_TITLE'); }
    e=document.getElementById('TITLE2');
    if (e) { e.innerHTML = _f_getText('ATRACT_TITLE'); }
    e=document.getElementById('TITLE3');
    if (e) { e.innerHTML = _f_getText('ATRACT_TITLE'); }
    e=document.getElementById('CREDIT_TXT');
    if (e) { e.innerHTML = _f_getText('ATRACT_CREDIT'); }
    e=document.getElementById('TX1');
    if (e) { e.innerHTML = _f_getText('ATRACT_TX'); }
    e=document.getElementById('TX2');
    if (e) { e.innerHTML = _f_getText('ATRACT_TX'); }
    e=document.getElementById('TX3');
    if (e) { e.innerHTML = _f_getText('ATRACT_TX'); }

    // Main menu
    e=document.getElementById('COPYRIGHT_CREDIT');
    if (e) { MENU(); }
}

// audioLib
_f_registerText('MENU_LANG_TOGGLE', 'English', '日本語');
_f_registerText('MENU_AUDIO_OFF', '無音モード', 'Sound: OFF');
_f_registerText('MENU_AUDIO_ON', '有音モード', 'Sound: ON');
_f_registerText('NOAUDIO_ALERT_1', 'ペールムーンでは不具合があるため、音声出力を停止しております。', 'Due to a technical issue with Pale Moon, audio output has been disabled.');
_f_registerText('NOAUDIO_ALERT_2', 'お使いの端末では音声出力がサポート出来ません。', 'Your device does not support audio output.');
_f_registerText('NOAUDIO_ALERT_OTHER', 'モバイル端末では音声出力をサポートしておりません。', 'Audio output is not supported on mobile devices.');

// graphc1
_f_registerText('H5_MENU_CHARACTER', '創作キャラクタ・堀北真希うさぎ ', 'Character: Maki Horikita the Rabbit ');
_f_registerText('H5_MENU_COPYRIGHT', _f_copyright, _f_copyright_en);
_f_registerText('H5_MENU_GAMENAME', 'しらぎく花札', 'White Chrysanthemum Hanafuda');
_f_registerText('H5_MENU_VERSION', _f_AI_version, _f_AI_version_en);
_f_registerText('QUITGAME_CONFIRM', '現在のゲームを終了して、お品書きに戻りますか？', 'Quit game and return to menu?')

// graphc5
_f_registerText('MENU_ANIMS_OFF', '札の動画効果：切', 'Animations: OFF');
_f_registerText('MENU_ANIMS_ON', '札の動画効果：入', 'Animations: ON');
_f_registerText('MENU_TEXT_TITLE', 'お品書き', 'Available games:');
_f_registerText('MENU_TEXT_3P', '三人打ち', '3 player');
_f_registerText('MENU_TEXT_2P', '二人打ち', '2 player');
_f_registerText('MENU_TEXT_KABU', 'カブ競技', 'Kabu games');
_f_registerText('MENU_TEXT_OPTIONS', '設定', 'Options');
_f_registerText('MENU_TEXT_OTHER', 'その他', 'Other');
_f_registerText('MENU_GAME_HANAAWASE', '花合わせ', 'Hana-awase');
_f_registerText('MENU_GAME_88', 'はちはち', 'Hachi-hachi');
_f_registerText('MENU_GAME_SUDAOSHI', 'すだおし', 'Sudaoshi');
_f_registerText('MENU_GAME_3_600KEN', '三人六百間', '3P Roppyaken');
_f_registerText('MENU_GAME_KOIKOI', 'こいこい', 'Koi-koi');
_f_registerText('MENU_GAME_MUSHI', 'むし', 'Mushi');
_f_registerText('MENU_GAME_2_88', '二人はちはち', '2P Hachi-hachi');
_f_registerText('MENU_GAME_2_600KEN', '六百間', 'Roppyaken');
_f_registerText('MENU_GAME_HACHI', 'はち', 'Hachi');
_f_registerText('MENU_GAME_OICHOKABU', 'おいちょかぶ', 'Oicho-kabu');
_f_registerText('MENU_GAME_KYOKABU', '京かぶ', 'Kyo-kabu');
_f_registerText('MENU_OPT_GAME_RULES', 'ルール設定', 'Game rules');
_f_registerText('MENU_OPT_OPTIONS', '対局環境設定', 'General options');
_f_registerText('MENU_OTHER_SITE', '公開サイト', 'Visit site');
_f_registerText('MENU_OTHER_ABOUT', 'おくづけ', 'About');
_f_registerText('MENU_OTHER_MAHJONG', 'しらぎく麻雀', 'Mahjong');

// routines01
_f_registerText('MENU_RETURN', 'お品書きに戻る', 'Return to menu');

// routines02
_f_registerText('ATRACT_TITLE', 'しらぎく花札', 'しらぎく花札'); // Opted not to translate for now
_f_registerText('ATRACT_CREDIT', 'Copyright &copy; '+_f_copyright_year+' さいたま・しらぎくさいと', 'Copyright &copy; '+_f_copyright_year_en+' Saitama・Marguerite Site');
_f_registerText('ATRACT_TX', '画面をクリック/タップして下さい。', 'Click to begin');

_f_registerText('', '', '');

// TODO: check if / where the current "page" / "mode" (e.g. menu, which menu, in game, which game) is stored so I know better what to redraw