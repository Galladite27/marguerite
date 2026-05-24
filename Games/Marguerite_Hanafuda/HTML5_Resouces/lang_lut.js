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
    _f_lang = _f_lang==_F_LANG_JP ? _F_LANG_EN : _F_LANG_JP;
    setMenuItem('MENU_LANG', 300, 3, _f_getText('MENU_LANG_TOGGLE'), '_f_langToggle()', 0);

    var e;

    // Header bar
    SHOW_AUDIOMODE();
    e=document.getElementById('MENUBAR_RESTART');
    if (e) { e.innerHTML = _f_getText('MENU_RETURN'); }
    _f_toggle_sprite_disp(_f_toggle_sprite_last_mode);

    // Atract
    if (_f_currentMenu == _F_MENU_ATRACT) {
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
    }

    // Menus
    if (_f_currentMenu == _F_MENU_MAIN) {
        MENU();
    } else if (_f_currentMenu == _F_MENU_RULES_MAIN) {
        RULE_MENU();
    } else if (_f_currentMenu == _F_MENU_OPTIONS) {
        UI_SETTINGS();
    } else if (_f_currentMenu == _F_MENU_ABOUT) {
        ABOUT();
    }
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
_f_registerText('H5_MENU_AIVERSION', _f_AI_version, _f_AI_version_en);
_f_registerText('H5_MENU_VERSION', _f_version, _f_version_en);

_f_registerText('QUITGAME_CONFIRM', '現在のゲームを終了して、お品書きに戻りますか？', 'Quit game and return to menu?')

// graphc5
_f_registerText('MENU_ANIMS_OFF', '札の動画効果：切', 'Animations: OFF');
_f_registerText('MENU_ANIMS_ON', '札の動画効果：入', 'Animations: ON');

_f_registerText('MENU_TEXT_TITLE', 'お品書き', ' Games menu');
_f_registerText('MENU_TEXT_3P', '三人打ち', '3 player');
_f_registerText('MENU_TEXT_2P', '二人打ち', '2 player');
_f_registerText('MENU_TEXT_KABU', 'カブ競技', 'Kabu games');
_f_registerText('MENU_TEXT_OPTIONS', '設定', 'Options');
_f_registerText('MENU_TEXT_OTHER', 'その他', 'Other');
_f_registerText('MENU_GAME_HANAAWASE', '花合わせ', 'Hana-awase');
_f_registerText('MENU_GAME_88', 'はちはち', 'Hachi-hachi');
_f_registerText('MENU_GAME_SUDAOSHI', 'すだおし', 'Sudaoshi');
_f_registerText('MENU_GAME_3_600KEN', '三人六百間', '3P Roppyakken');
_f_registerText('MENU_GAME_KOIKOI', 'こいこい', 'Koi-koi');
_f_registerText('MENU_GAME_MUSHI', 'むし', 'Mushi');
_f_registerText('MENU_GAME_2_88', '二人はちはち', '2P Hachi-hachi');
_f_registerText('MENU_GAME_2_600KEN', '六百間', 'Roppyakken');
_f_registerText('MENU_GAME_HACHI', 'はち', 'Hachi');
_f_registerText('MENU_GAME_OICHOKABU', 'おいちょかぶ', 'Oicho-kabu');
_f_registerText('MENU_GAME_KYOKABU', '京かぶ', 'Kyo-kabu');
_f_registerText('MENU_OPT_GAME_RULES', 'ルール設定', 'Game rules');
_f_registerText('MENU_OPT_OPTIONS', '対局環境設定', 'General options');
_f_registerText('MENU_OTHER_SITE', '公開サイト', 'Visit site');
_f_registerText('MENU_OTHER_ABOUT', 'おくづけ', 'Version');
_f_registerText('MENU_OTHER_MAHJONG', 'しらぎく麻雀', 'Mahjong');

_f_registerText('MENU_ABOUT_TITLE', '『しらぎく花札』のおくづけ', '『White Chrysanthemum Hanafuda』 version info');
_f_registerText('MENU_ABOUT_VER', '版番号', 'Game version:');
_f_registerText('MENU_ABOUT_AIVER', '思考エンジンの版', 'AI version:');

_f_registerText('MENU_OPTS_ROUNDS', '一試合の局数', 'Game length');
_f_registerText('MENU_OPTS_ROUNDS_EXCLUDES', '※六百間, 三人六百間, はちには適用されません。', '※Excludes roppyakken, 3P roppyakken and hachi-hachi');
_f_registerText('MENU_OPTS_SOUNDS', '効果音', 'Sounds');
_f_registerText('MENU_OPTS_MATCOLOUR', '座布団の色', 'Mat colour');
_f_registerText('MENU_OPTS_CARDCOLOUR', '札の裏の色', 'Card back colour');
_f_registerText('MENU_OPTS_MATCHES', '場札と合せられる手札', 'Match indication');
_f_registerText('MENU_OPTS_NAME', '相手の名前', 'Opponent names');
_f_registerText('MENU_OPTS_NAME_RIGHT', '右手', 'Right player');
_f_registerText('MENU_OPTS_NAME_LEFT', '左手', 'Left player');
_f_registerText('MENU_OPTS_NAME_EXCLUDES', '※三人打ち及びカブ競技でのみ有効です。', '※3-player and kabu games only');
_f_registerText('MENU_OPTS_ANIMS', '札の動画効果', 'Card animations');

_f_registerText('MENU_OPTS_ROUNDS_12', '十二局', '12 rounds');
_f_registerText('MENU_OPTS_ROUNDS_6', '六局(半ドン)', '6 rounds');
_f_registerText('MENU_OPTS_SOUNDS_ALL', '全て演奏', 'All sounds');
_f_registerText('MENU_OPTS_SOUNDS_NOMUSIC', '音楽以外演奏', 'No music');
_f_registerText('MENU_OPTS_MATCOLOUR_BLACK', '黒色', 'Black');
_f_registerText('MENU_OPTS_MATCOLOUR_BLUE', '青色', 'Blue');
_f_registerText('MENU_OPTS_MATCOLOUR_GREEN', '緑色', 'Green');
_f_registerText('MENU_OPTS_MATCOLOUR_CRIMSON', '臙脂', 'Crimson');
_f_registerText('MENU_OPTS_CARDCOLOUR_BLACK', '黒色', 'Black');
_f_registerText('MENU_OPTS_CARDCOLOUR_BROWN', '茶色', 'Brown');
_f_registerText('MENU_OPTS_CARDCOLOUR_ALT', '黒/茶交代', 'Alternating');
_f_registerText('MENU_OPTS_MATCHES_OFF', '特に明示せず', 'Disabled');
_f_registerText('MENU_OPTS_MATCHES_ON', '点滅で明示', 'Enabled');
_f_registerText('MENU_OPTS_ANIMS_ON', 'あり', 'Enabled');
_f_registerText('MENU_OPTS_ANIMS_OFF', '無し', 'Disabled');

// routines01
_f_registerText('MENU_RETURN', 'お品書きに戻る', 'Return to menu');

// routines02
_f_registerText('ATRACT_TITLE', 'しらぎく花札', 'しらぎく花札'); // Opted not to translate for now
_f_registerText('ATRACT_CREDIT', 'Copyright &copy; '+_f_copyright_year+' さいたま・しらぎくさいと', 'Copyright &copy; '+_f_copyright_year_en+' Saitama・Marguerite Site');
_f_registerText('ATRACT_TX', '画面をクリック/タップして下さい。', 'Click to begin');

_f_registerText('', '', '');

// TODO: check if / where the current "page" / "mode" (e.g. menu, which menu, in game, which game) is stored so I know better what to redraw