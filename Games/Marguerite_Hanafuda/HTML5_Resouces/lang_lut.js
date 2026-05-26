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
    } else if (_f_currentMenu == _F_MENU_MAIN_USAGI) {
        MENU();
        MENU_HORIKITA_MAKI_USAGI(redraw = true);
    } else if (_f_currentMenu == _F_MENU_OPTIONS) {
        UI_SETTINGS();
    } else if (_f_currentMenu == _F_MENU_ABOUT) {
        ABOUT();
    }

    else if (_f_currentMenu == _F_MENU_RULES_HA) {
        RULE_HA();
    } else if (_f_currentMenu == _F_MENU_RULES_KK) {
        RULE_KK();
    } else if (_f_currentMenu == _F_MENU_RULES_88) {
        RULE_88();
    } else if (_f_currentMenu == _F_MENU_RULES_KABU) {
        RULE_OCK();
    }

    else if (_f_currentMenu == _F_MENU_GAME) {
        _f_playfield();
    }

    /*
Important functions for drawing game state:
_f_tefuda_disp (for hand)
_f_bafuda_disp (for field)
_f_torifuda_disp (for captured cards)
_f_score_disp (for scores)
_f_yamafuda_disp (for deck)
_f_oichokabu_selectable_yamafuda_disp (oicho-kabu selectable deck)
_f_playfield (peripheral information - does _f_score_disp and _f_yamafuda_disp)
    */
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
_f_registerText('MENU_GAME_3_600KEN', '三人六百間', 'Roppyakken'); // Would call it "3P roppyakken" but that doesn't fit; but 2P and 3P are normal, so...
_f_registerText('MENU_GAME_KOIKOI', 'こいこい', 'Koi-koi');
_f_registerText('MENU_GAME_MUSHI', 'むし', 'Mushi');
_f_registerText('MENU_GAME_2_88', '二人はちはち', '2P Hachi-hachi'); // Should this just be "Hachi-hachi" then? See above comment on 3P riooyakken.
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

_f_registerText('MENU_USAGI_CHARACTER1', '『しらぎく花札』制作者の創作キャラクタ', 'This is 『White Chrysanthemum Hanafuda\'s』 creator\'s original character, ');
_f_registerText('MENU_USAGI_CHARACTER2', '堀北真希うさぎ', 'Maki Horikita the Rabbit');
_f_registerText('MENU_USAGI_CHARACTER3', 'です。', '.');
_f_registerText('MENU_USAGI_FIRST', '※『しらぎく花札』には登場しません。', '※This game is not her first appearence.');
_f_registerText('MENU_USAGI_MOREINFO', '堀北真希うさぎの詳細', 'More information');
_f_registerText('MENU_USAGI_RETURN', '閉じる', 'Return');

_f_registerText('MENU_OPTS_ROUNDS', '一試合の局数', 'Game length');
_f_registerText('MENU_OPTS_ROUNDS_EXCLUDES', '※六百間, 三人六百間, はちには適用されません。', '※Excludes roppyakken and hachi-hachi');
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

_f_registerText('MENU_RULES_HA_TITLE', '花合わせ ルール設定', 'Hana-awase rules');
_f_registerText('MENU_RULES_KK_TITLE', 'こいこい ルール設定', 'Koi-koi rules');
_f_registerText('MENU_RULES_88_TITLE', 'はちはち ルール設定', 'Hachi-hachi rules');
_f_registerText('MENU_RULES_KABU_TITLE', 'カブ競技(おいちょかぶ/京かぶ) ルール設定', 'Kabu games rules');

_f_registerText('MENU_RULES_GENERIC_ARI', 'あり', 'On');
_f_registerText('MENU_RULES_GENERIC_NASHI', 'なし', 'Off');
_f_registerText('MENU_RULES_GENERIC_ALLYAKUTOGGLE', '上記の役全部', 'All yaku');
_f_registerText('MENU_RULES_GENERIC_ALLABOVETOGGLE', '上記のルール全部', 'All rules');
_f_registerText('MENU_RULES_GENERIC_ALLENABLE', 'ありにする', 'Enable');
_f_registerText('MENU_RULES_GENERIC_ALLDISABLE', 'なしにする', 'Disable');

_f_registerText('MENU_RULES_HA_76TAN', '七短/六短', '7/6 ribbons');
_f_registerText('MENU_RULES_HA_NOMI', '呑み/花見酒・月見酒', 'Drinking/viewing');
_f_registerText('MENU_RULES_HA_SPRING', '表菅原', 'Spring');
_f_registerText('MENU_RULES_HA_PPM', '松桐坊主', 'Pine, paulownia, moon');
_f_registerText('MENU_RULES_HA_BDB', '猪鹿蝶', 'Boar, deer, butterflies');
_f_registerText('MENU_RULES_HA_753', '七五三', '753'); // TODO what is this? How should it be translated?
_f_registerText('MENU_RULES_HA_GRASSRIBBONS', '草短', 'Grass ribbons');
_f_registerText('MENU_RULES_HA_WP_ROW', '藤シマ/桐シマ', 'Wisteria/paulownia row');
_f_registerText('MENU_RULES_HA_W_ROW', '雨シマ', 'Willow row');
_f_registerText('MENU_RULES_HA_76TEYAKU', '手札七カス/六カス', '7/6 chaff teyaku');
_f_registerText('MENU_RULES_HA_DANDRUFF', 'フケ', 'Dandruff');
_f_registerText('MENU_RULES_HA_40TNASHI', '四十点/なし', '40 ten/off');
_f_registerText('MENU_RULES_HA_40T30T', '四十点/三十点', '40 ten/30 ten');
_f_registerText('MENU_RULES_HA_30T20T', '三十点/二十点', '30 ten/20 ten');
_f_registerText('MENU_RULES_HA_30T', '三十点', '30 ten');
_f_registerText('MENU_RULES_HA_20T', '二十点', '20 ten');
_f_registerText('MENU_RULES_HA_20TYAKU', '二十点役', '20 ten yaku');
_f_registerText('MENU_RULES_HA_DEKIYAKUNAGASHI', '出来役流し', 'Cancels dekiyaku');
_f_registerText('MENU_RULES_HA_30TNASHI', '三十点/なし', '30 ten/off');
_f_registerText('MENU_RULES_HA_60TYAKU', '六十点役', '60 ten yaku');
_f_registerText('MENU_RULES_HA_FORCEDRAW', '無勝負', 'Forces draw');

_f_registerText('MENU_RULES_KK_FIELDSIZE', '配札時の場札', 'Cards drawn to field');
_f_registerText('MENU_RULES_KK_LOSTYAKU', '「こいこい」して流れた場合の出来役', 'Yaku formed if round ends after "koi-koi"');
_f_registerText('MENU_RULES_KK_OYAKEN', '親権', 'Dealer win on draw');
_f_registerText('MENU_RULES_KK_4RAINYBRIGHTS', '雨入り四光', 'Rainy four brights');
_f_registerText('MENU_RULES_KK_3BRIGHTS', '三光', 'Three brights');
_f_registerText('MENU_RULES_KK_BDB', '猪鹿蝶', 'Boar, deer, butterfly');
_f_registerText('MENU_RULES_KK_SAKE', '花見酒・月見酒', 'Flower/moon viewing');
_f_registerText('MENU_RULES_KK_753', '七五三', '753');
_f_registerText('MENU_RULES_KK_CFCBW', '表菅原', 'Crane, curtain, warbler');
_f_registerText('MENU_RULES_KK_DRAW_CHAFF', '手札総カス', 'All-chaff draw');
_f_registerText('MENU_RULES_KK_DRAW_332', '手札三々二', '3-3-2 draw');
_f_registerText('MENU_RULES_KK_DRAW_3PAIRS', '手札喰付', '3 pairs draw');
_f_registerText('MENU_RULES_KK_DRAW_4KIND', '手札手四', '4-of-a-kind draw');
_f_registerText('MENU_RULES_KK_MULTITYPE', '化札', 'Multi-type cards');
_f_registerText('MENU_RULES_KK_6CARDS', '六枚', '6 cards');
_f_registerText('MENU_RULES_KK_8CARDS', '八枚', '8 cards');
_f_registerText('MENU_RULES_KK_VOID', '失効', 'Void');
_f_registerText('MENU_RULES_KK_VALID', '有効', 'Valid');
_f_registerText('MENU_RULES_KK_6MON', '六文', '6 mon');
_f_registerText('MENU_RULES_KK_8MON', '八文', '8 mon');
_f_registerText('MENU_RULES_KK_5MON', '五文', '5 mon');
_f_registerText('MENU_RULES_KK_SAKECUP', '菊に盃をタネとカスに適用', 'Sake cup counts as both ten and chaff');

_f_registerText('MENU_RULES_88_EXTENDS', '大場・絶場の越年', 'Large/grand field extends game');
_f_registerText('MENU_RULES_88_BDB', '猪鹿蝶', 'Boar, deer, butterflies');
_f_registerText('MENU_RULES_88_2PYAKU', '二人はちはちでの総八</b>※<b>/二八/素十六', '2P - all eights</b>※<b> / double eights / 16 chaff');
_f_registerText('MENU_RULES_88_7KAN', '七貫', '7 kan');
_f_registerText('MENU_RULES_88_2PYAKUNOTE', '※二人はちはちでの総八とは、両者同点の場合を指します。', '※In 2P hachi-hachi, this happens when both players are tied');

_f_registerText('MENU_RULES_KABU_DECK', '使用札', 'Deck style');
_f_registerText('MENU_RULES_KABU_BUTAWARAI', '親のブタ/笑い', 'Dealer 3-card 0'); // TODO check if for 3 cards only
_f_registerText('MENU_RULES_KABU_EQUALSCORE', '親子同数位', 'Dealer matches score');
_f_registerText('MENU_RULES_KABU_MAKIFUDA', '蒔き札', 'Player initial cards'); // For if the players get a card to view
_f_registerText('MENU_RULES_KABU_DRAWS', '七以上引き無し/三以下引きの規制', 'No draws for 7 or greater / forced draws for 3 or fewer');
_f_registerText('MENU_RULES_KABU_41', '四一', '4-1 yaku');
_f_registerText('MENU_RULES_KABU_9141', '九一/四一の条件', '9-1/4-1 conditions');
_f_registerText('MENU_RULES_KABU_OCHIKABUONLY', '※印はおいちょかぶでのみ有効。', '※Only applicable to oichi-kabu');
_f_registerText('MENU_RULES_KABU_DECK_KABUFUDA', '株札', 'Kabu');
_f_registerText('MENU_RULES_KABU_DECK_HANAFUDA', '花札', 'Hana');
_f_registerText('MENU_RULES_KABU_BUTAWARAI_REDRAW', '無勝負', 'Draw');
_f_registerText('MENU_RULES_KABU_BUTAWARAI_VALID', '有効', 'Valid');
_f_registerText('MENU_RULES_KABU_EQUALSCORE_OYAKEN', '親権', 'Win');
_f_registerText('MENU_RULES_KABU_EQUALSCORE_DRAW', '無勝負', 'Draw');
_f_registerText('MENU_RULES_KABU_DRAWS_MANDATED', '制約あり', 'Mandated');
_f_registerText('MENU_RULES_KABU_DRAWS_UNRESTRICTED', '無制限', 'Unrestricted');
_f_registerText('MENU_RULES_KABU_41_DEALER', '親の役', 'Dealer');
_f_registerText('MENU_RULES_KABU_41_PLAYER', '子の役', 'Player');
_f_registerText('MENU_RULES_KABU_4191_ORDERED', '二枚目が一の場合のみ有効', 'Valid only in order');
_f_registerText('MENU_RULES_KABU_4191_UNORDERED', '順序は不問', 'Either card first');

_f_registerText('', '', '');

// routines01
_f_registerText('MENU_RETURN', 'お品書きに戻る', 'Return to menu');

// routines02
_f_registerText('ATRACT_TITLE', 'しらぎく花札', 'しらぎく花札'); // Opted not to translate for now
_f_registerText('ATRACT_CREDIT', 'Copyright &copy; '+_f_copyright_year+' さいたま・しらぎくさいと', 'Copyright &copy; '+_f_copyright_year_en+' Saitama・Marguerite Site');
_f_registerText('ATRACT_TX', '画面をクリック/タップして下さい。', 'Click to begin');

_f_registerText('', '', '');

// TODO: check if / where the current "page" / "mode" (e.g. menu, which menu, in game, which game) is stored so I know better what to redraw