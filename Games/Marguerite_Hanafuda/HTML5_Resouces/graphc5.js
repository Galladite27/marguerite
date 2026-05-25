function RULE_SELECTEND() {
    var k, d;
    
    try {
        for (k in _f_rule_sel) {
            localStorage.setItem('Marguerite_HanaFla-'+k, _f_rule_sel[k]);
        }
    }
    catch (e) {
        ;
    }
    
    _f_h5_next=setTimeout('MENU(); ', 10);
}
function RULE_SELECTEND2() {
    var k, d;
    
    try {
        for (k in _f_rule_sel) {
            localStorage.setItem('Marguerite_HanaFla-'+k, _f_rule_sel[k]);
        }
    }
    catch (e) {
        ;
    }
    
    _f_h5_next=setTimeout('RULE_MENU(); ', 10);
}

function RULE_HA() {
    _f_currentMenu = _F_MENU_RULES_HA;
    _f_cushion_color();
    RULE_HA_2();
}
function RULE_HA_2() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;
    
    _f_nextScreen='RULE_HA_2()';
    clearTimeout(_f_h5_next);
    
    if (_f_rule_sel['__acl']) {
        _f_rule_sel['HA_67tan']=2;
        _f_rule_sel['HA_nomi']=_f_rule_sel['HA_omotesugawara']=_f_rule_sel['HA_makkiribozu']=_f_rule_sel['HA_inoshikacho']=_f_rule_sel['HA_shichigosan']=_f_rule_sel['HA_kusa']=_f_rule_sel['HA_shima']=1;
        _f_rule_sel['HA_ameshima']=2;
        _f_rule_sel['HA_67kasu']=0;
        _f_rule_sel['HA_fuke']=2;
        delete(_f_rule_sel['__acl']);
        _f_h5_next=setTimeout('RULE_HA_2(); ', 10);
    }
    if (_f_rule_sel['__aok']) {
        _f_rule_sel['HA_67tan']=0;
        _f_rule_sel['HA_nomi']=_f_rule_sel['HA_omotesugawara']=_f_rule_sel['HA_makkiribozu']=_f_rule_sel['HA_inoshikacho']=_f_rule_sel['HA_shichigosan']=_f_rule_sel['HA_kusa']=_f_rule_sel['HA_shima']=_f_rule_sel['HA_ameshima']=0;
        _f_rule_sel['HA_67kasu']=2;
        _f_rule_sel['HA_fuke']=1;
        delete(_f_rule_sel['__aok']);
        _f_h5_next=setTimeout('RULE_HA_2(); ', 10);
    }
    
    removeAllOfTextArea();
    _f_textWindow('OPTION_FIELD', xh, yh, w, h, '#fff');
    _f_leftText('HEADINGS', xh+margin, yh+margin, cs*14, cs, '#fff', '<b>'+_f_getText('MENU_RULES_HA_TITLE')+'</b>');
    
    xh+=margin;
    yh+=margin;
    _f_leftText('HD_01', xh, yh+ch*2, cs*5, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_76TAN')+'</b>');
    _f_leftText('HD_02', xh, yh+ch*3, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_NOMI')+'</b>');
    _f_leftText('HD_03', xh, yh+ch*4, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_SPRING')+'</b>');
    _f_leftText('HD_04', xh, yh+ch*5, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_PPM')+'</b>');
    _f_leftText('HD_05', xh, yh+ch*6, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_BDB')+'</b>');
    _f_leftText('HD_06', xh, yh+ch*7, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_753')+'</b>');
    _f_leftText('HD_07', xh, yh+ch*8, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_GRASSRIBBONS')+'</b>');
    _f_leftText('HD_08', xh, yh+ch*9, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_WP_ROW')+'</b>');
    _f_leftText('HD_09', xh, yh+ch*10, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_W_ROW')+'</b>');
    _f_leftText('HD_10', xh, yh+ch*12, cs*9, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_76TEYAKU')+'</b>');
    _f_leftText('HD_11', xh, yh+ch*13, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_HA_DANDRUFF')+'</b>');
    _f_leftText('HD_12', xh, yh+ch*15, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_GENERIC_ALLYAKUTOGGLE')+'</b>');
    
    d=_f_textButton(d, xh+cs*10,yh+ch*2,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_67tan', 2);
    d=_f_textButton(d, xh+cs*13,yh+ch*2,cs*6,cs,_f_getText('MENU_RULES_HA_40TNASHI'),'HA_67tan', 1);
    d=_f_textButton(d, xh+cs*19,yh+ch*2,cs*7,cs,_f_getText('MENU_RULES_HA_40T30T'),'HA_67tan', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*3,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_nomi', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*3,cs*7,cs,_f_getText('MENU_RULES_HA_30T20T'),'HA_nomi', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*4,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_omotesugawara', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*4,cs*3,cs,_f_getText('MENU_RULES_HA_30T'),'HA_omotesugawara', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*5,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_makkiribozu', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*5,cs*3,cs,_f_getText('MENU_RULES_HA_20T'),'HA_makkiribozu', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*6,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_inoshikacho', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*6,cs*3,cs,_f_getText('MENU_RULES_HA_20T'),'HA_inoshikacho', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*7,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_shichigosan', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*7,cs*3,cs,_f_getText('MENU_RULES_HA_20T'),'HA_shichigosan', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*8,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_kusa', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*8,cs*3,cs,_f_getText('MENU_RULES_HA_20T'),'HA_kusa', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*9,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_shima', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*9,cs*3,cs,_f_getText('MENU_RULES_HA_20T'),'HA_shima', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*10,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_ameshima', 2);
    d=_f_textButton(d, xh+cs*13,yh+ch*10,cs*4.5,cs,_f_getText('MENU_RULES_HA_20TYAKU'),'HA_ameshima', 0);
    d=_f_textButton(d, xh+cs*18,yh+ch*10,cs*6.5,cs,_f_getText('MENU_RULES_HA_DEKIYAKUNAGASHI'),'HA_ameshima', 1);
    d=_f_textButton(d, xh+cs*10,yh+ch*12,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_67kasu', 0);
    d=_f_textButton(d, xh+cs*13,yh+ch*12,cs*6,cs,_f_getText('MENU_RULES_HA_30TNASHI'),'HA_67kasu', 1);
    d=_f_textButton(d, xh+cs*19,yh+ch*12,cs*7,cs,_f_getText('MENU_RULES_HA_30T20T'),'HA_67kasu', 2);
    d=_f_textButton(d, xh+cs*10,yh+ch*13,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HA_fuke', 2);
    d=_f_textButton(d, xh+cs*13,yh+ch*13,cs*4.5,cs,_f_getText('MENU_RULES_HA_60TYAKU'),'HA_fuke', 1);
    d=_f_textButton(d, xh+cs*18,yh+ch*13,cs*5,cs,_f_getText('MENU_RULES_HA_FORCEDRAW'),'HA_fuke', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*15,cs*5,cs,_f_getText('MENU_RULES_GENERIC_ALLDISABLE'),'__acl', 1);
    d=_f_textButton(d, xh+cs*16,yh+ch*15,cs*5,cs,_f_getText('MENU_RULES_GENERIC_ALLENABLE'),'__aok', 1);
    
    d=_f_textButton2(d, xh+cs*22.5,yh,cs*6,cs,String.fromCharCode(9664)+_f_getText('MENU_OPT_GAME_RULES'),'RULE_SELECTEND2');
    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'RULE_SELECTEND');
    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}

function RULE_KK() {
    _f_currentMenu = _F_MENU_RULES_KK;
    _f_cushion_color();
    RULE_KK_2();
}
function RULE_KK_2() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;
    
    _f_nextScreen='RULE_KK_2()';
    clearTimeout(_f_h5_next);
    
    if (_f_rule_sel['__acl']) {
        _f_rule_sel['KK_oyaken']=_f_rule_sel['KK_inoshikacho']=_f_rule_sel['KK_hanamisake']=_f_rule_sel['KK_shichigosan']=_f_rule_sel['KK_ameshiko']=_f_rule_sel['KK_sanko']=_f_rule_sel['KK_sokasu']=_f_rule_sel['KK_sansanni']=_f_rule_sel['KK_kuttsuki']=_f_rule_sel['KK_teshi']=_f_rule_sel['KK_bakefuda']=1;
        _f_rule_sel['KK_omotesugawara']=0;
        delete(_f_rule_sel['__acl']);
        _f_h5_next=setTimeout('RULE_KK_2(); ', 10);
    }
    if (_f_rule_sel['__aok']) {
        _f_rule_sel['KK_oyaken']=_f_rule_sel['KK_inoshikacho']=_f_rule_sel['KK_hanamisake']=_f_rule_sel['KK_shichigosan']=_f_rule_sel['KK_ameshiko']=_f_rule_sel['KK_sanko']=_f_rule_sel['KK_sokasu']=_f_rule_sel['KK_sansanni']=_f_rule_sel['KK_kuttsuki']=_f_rule_sel['KK_teshi']=_f_rule_sel['KK_bakefuda']=0;
        _f_rule_sel['KK_omotesugawara']=1;
        delete(_f_rule_sel['__aok']);
        _f_h5_next=setTimeout('RULE_KK_2(); ', 10);
    }
    
    removeAllOfTextArea();
    _f_textWindow('OPTION_FIELD', xh, yh, w, h, '#fff');
    _f_leftText('HEADINGS', xh+margin, yh+margin, cs*14, cs, '#fff', '<b>'+_f_getText('MENU_RULES_KK_TITLE')+'</b>');
    
    xh+=margin;
    yh+=margin;
    _f_leftText('HD_01', xh, yh+ch*2, cs*17, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_FIELDSIZE')+'</b>');
    _f_leftText('HD_02', xh, yh+ch*3.5, cs*17, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_LOSTYAKU')+'</b>');
    _f_leftText('HD_03', xh, yh+ch*5, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_OYAKEN')+'</b>');
    _f_leftText('HD_04', xh, yh+ch*6, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_4RAINYBRIGHTS')+'</b>');
    _f_leftText('HD_05', xh, yh+ch*7, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_3BRIGHTS')+'</b>');
    _f_leftText('HD_06', xh, yh+ch*8, cs*12, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_BDB')+'</b>');
    _f_leftText('HD_07', xh, yh+ch*9, cs*12, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_SAKE')+'</b>');
    _f_leftText('HD_08', xh, yh+ch*10, cs*3, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_753')+'</b>');
    _f_leftText('HD_09', xh, yh+ch*11, cs*12, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_CFCBW')+'</b>');
    _f_leftText('HD_10', xh, yh+ch*12, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_DRAW_CHAFF')+'</b>');
    _f_leftText('HD_11', xh, yh+ch*13, cs*7, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_DRAW_332')+'</b>');
    _f_leftText('HD_12', xh, yh+ch*14, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_DRAW_3PAIRS')+'</b>');
    _f_leftText('HD_13', xh, yh+ch*15, cs*8, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_DRAW_4KIND')+'</b>');
    _f_leftText('HD_14', xh, yh+ch*16, cs*8, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KK_MULTITYPE')+'</b>');
    _f_leftText('HD_15', xh, yh+ch*17.5, cs*8, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_GENERIC_ALLABOVETOGGLE')+'</b>');
    
    d=_f_textButton(d, xh+cs*18,yh+ch*2,cs*4,cs,_f_getText('MENU_RULES_KK_6CARDS'),'KK_bafuda', 0);
    d=_f_textButton(d, xh+cs*21,yh+ch*2,cs*4,cs,_f_getText('MENU_RULES_KK_8CARDS'),'KK_bafuda', 1);
    d=_f_textButton(d, xh+cs*18,yh+ch*3.5,cs*2,cs,_f_getText('MENU_RULES_KK_VOID'),'KK_koikoi_nagare', 1);
    d=_f_textButton(d, xh+cs*21,yh+ch*3.5,cs*2,cs,_f_getText('MENU_RULES_KK_VALID'),'KK_koikoi_nagare', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*5,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_oyaken', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*5,cs*3,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_oyaken', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*6,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_ameshiko', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*6,cs*5,cs,_f_getText('MENU_RULES_KK_8MON'),'KK_ameshiko', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*7,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_sanko', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*7,cs*5,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_sanko', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*8,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_inoshikacho', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*8,cs*3,cs,_f_getText('MENU_RULES_KK_5MON'),'KK_inoshikacho', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*9,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_hanamisake', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*9,cs*3,cs,_f_getText('MENU_RULES_KK_5MON'),'KK_hanamisake', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*10,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_shichigosan', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*10,cs*3,cs,_f_getText('MENU_RULES_KK_5MON'),'KK_shichigosan', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*11,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_omotesugawara', 0);
    d=_f_textButton(d, xh+cs*13,yh+ch*11,cs*3,cs,_f_getText('MENU_RULES_KK_5MON'),'KK_omotesugawara', 1);
    d=_f_textButton(d, xh+cs*10,yh+ch*12,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_sokasu', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*12,cs*3,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_sokasu', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*13,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_sansanni', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*13,cs*3,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_sansanni', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*14,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_kuttsuki', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*14,cs*3,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_kuttsuki', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*15,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_teshi', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*15,cs*3,cs,_f_getText('MENU_RULES_KK_6MON'),'KK_teshi', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*16,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'KK_bakefuda', 1);
    d=_f_textButton(d, xh+cs*13,yh+ch*16,cs*16,cs,_f_getText('MENU_RULES_KK_SAKECUP'),'KK_bakefuda', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*17.5,cs*5,cs,_f_getText('MENU_RULES_GENERIC_ALLDISABLE'),'__acl', 1);
    d=_f_textButton(d, xh+cs*16,yh+ch*17.5,cs*5,cs,_f_getText('MENU_RULES_GENERIC_ALLENABLE'),'__aok', 1);
    
    d=_f_textButton2(d, xh+cs*22.5,yh,cs*6,cs,String.fromCharCode(9664)+_f_getText('MENU_OPT_GAME_RULES'),'RULE_SELECTEND2');
    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'RULE_SELECTEND');
    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}

function RULE_88() {
    _f_currentMenu = _F_MENU_RULES_88;
    _f_cushion_color();
    RULE_88_2();
}
function RULE_88_2() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;

    _f_nextScreen='RULE_88_2()';
    clearTimeout(_f_h5_next);
    removeAllOfTextArea();
    _f_textWindow('OPTION_FIELD', xh, yh, w, h, '#fff');
    _f_leftText('HEADINGS', xh+margin, yh+margin, cs*14, cs, '#fff', '<b>'+_f_getText('MENU_RULES_88_TITLE')+'</b>');
    
    xh+=margin;
    yh+=margin;
    _f_leftText('HD_01', xh, yh+ch*2, cs*12, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_88_EXTENDS')+'</b>');
    _f_leftText('HD_02', xh, yh+ch*3, cs*12, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_88_BDB')+'</b>');
    _f_leftText('HD_03', xh, yh+ch*4, cs*18, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_88_2PYAKU')+'</b>');
    
    d=_f_textButton(d, xh+cs*18,yh+ch*2,cs*2,cs,_f_getText('MENU_RULES_GENERIC_ARI'),'HH_extension', 1);
    d=_f_textButton(d, xh+cs*21,yh+ch*2,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HH_extension', 0);
    d=_f_textButton(d, xh+cs*18,yh+ch*3,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HH_inoshikacho', 1);
    d=_f_textButton(d, xh+cs*21,yh+ch*3,cs*4,cs,_f_getText('MENU_RULES_88_7KAN'),'HH_inoshikacho', 0);
    d=_f_textButton(d, xh+cs*18,yh+ch*4,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'HH_288', 0);
    d=_f_textButton(d, xh+cs*21,yh+ch*4,cs*2,cs,_f_getText('MENU_RULES_GENERIC_ARI'),'HH_288', 1);
    _f_leftText('HD_04', xh+ch, yh+ch*5.5, cs*32, cs, '#fff', _f_getText('MENU_RULES_88_2PYAKUNOTE'));
    
    d=_f_textButton2(d, xh+cs*22.5,yh,cs*6,cs,String.fromCharCode(9664)+_f_getText('MENU_OPT_GAME_RULES'),'RULE_SELECTEND2');
    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'RULE_SELECTEND');
    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}

function RULE_OCK() {
    _f_currentMenu = _F_MENU_RULES_KABU;
    _f_cushion_color();
    RULE_OCK_2();
}
function RULE_OCK_2() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;
    
    _f_nextScreen='RULE_OCK_2()';
    clearTimeout(_f_h5_next);
    removeAllOfTextArea();
    _f_textWindow('OPTION_FIELD', xh, yh, w, h, '#fff');
    _f_leftText('HEADINGS', xh+margin, yh+margin, cs*20, cs, '#fff', '<b>'+_f_getText('MENU_RULES_KABU_TITLE')+'</b>');
    
    xh+=margin;
    yh+=margin;
    _f_leftText('HD_01', xh, yh+ch*2, cs*17, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_DECK')+'</b>');
    _f_leftText('HD_02', xh, yh+ch*3, cs*17, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_BUTAWARAI')+'</b>');
    _f_leftText('HD_03', xh, yh+ch*4, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_EQUALSCORE')+'</b>');
    _f_leftText('HD_04', xh, yh+ch*5, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_MAKIFUDA')+'</b>※');
    _f_leftText('HD_05', xh, yh+ch*6, cs*18, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_DRAWS')+'</b>');
    _f_leftText('HD_06', xh, yh+ch*8, cs*8, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_41')+'</b>※');
    _f_leftText('HD_07', xh, yh+ch*9, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_RULES_KABU_9141')+'</b>');
    _f_leftText('HD_08', xh, yh+ch*11, cs*32, cs, '#fff', _f_getText('MENU_RULES_KABU_OCHIKABUONLY'));
    
    d=_f_textButton(d, xh+cs*10,yh+ch*2,cs*3,cs,_f_getText('MENU_RULES_KABU_DECK_KABUFUDA'),'OCK_fudaType', 1);
    d=_f_textButton(d, xh+cs*14,yh+ch*2,cs*2,cs,_f_getText('MENU_RULES_KABU_DECK_HANAFUDA'),'OCK_fudaType', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*3,cs*3,cs,_f_getText('MENU_RULES_KABU_BUTAWARAI_REDRAW'),'OCK_oyabuta', 1);
    d=_f_textButton(d, xh+cs*14,yh+ch*3,cs*2,cs,_f_getText('MENU_RULES_KABU_BUTAWARAI_VALID'),'OCK_oyabuta', 0);
    d=_f_textButton(d, xh+cs*10,yh+ch*4,cs*2,cs,_f_getText('MENU_RULES_KABU_EQUALSCORE_OYAKEN'),'OCK_doten', 0);
    d=_f_textButton(d, xh+cs*13,yh+ch*4,cs*3,cs,_f_getText('MENU_RULES_KABU_EQUALSCORE_DRAW'),'OCK_doten', 1);
    d=_f_textButton(d, xh+cs*10,yh+ch*5,cs*2,cs,_f_getText('MENU_RULES_GENERIC_ARI'),'OCK_makifuda', 0);
    d=_f_textButton(d, xh+cs*13,yh+ch*5,cs*2,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'OCK_makifuda', 1);
    d=_f_textButton(d, xh+cs*10,yh+ch*7,cs*4,cs,_f_getText('MENU_RULES_KABU_DRAWS_MANDATED'),'OCK_hiki', 0);
    d=_f_textButton(d, xh+cs*15,yh+ch*7,cs*5,cs,_f_getText('MENU_RULES_KABU_DRAWS_UNRESTRICTED'),'OCK_hiki', 1);
    d=_f_textButton(d, xh+cs*10,yh+ch*8,cs*3,cs,_f_getText('MENU_RULES_KABU_41_DEALER'),'OCK_shippin', 0);
    d=_f_textButton(d, xh+cs*14,yh+ch*8,cs*3,cs,_f_getText('MENU_RULES_KABU_41_PLAYER'),'OCK_shippin', 1);
    d=_f_textButton(d, xh+cs*18,yh+ch*8,cs*3,cs,_f_getText('MENU_RULES_GENERIC_NASHI'),'OCK_shippin', 2);
    d=_f_textButton(d, xh+cs*10,yh+ch*9,cs*12,cs,_f_getText('MENU_RULES_KABU_4191_ORDERED'),'OCK_kuppin', 0);
    d=_f_textButton(d, xh+cs*23,yh+ch*9,cs*5,cs,_f_getText('MENU_RULES_KABU_4191_UNORDERED'),'OCK_kuppin', 1);
    d=_f_textButton2(d, xh+cs*22.5,yh,cs*6,cs,String.fromCharCode(9664)+_f_getText('MENU_OPT_GAME_RULES'),'RULE_SELECTEND2');
    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'RULE_SELECTEND');
    
    _f_h5_next=setTimeout('_f_wait4next(); ', 10);}

function MENU() {
    _f_currentMenu = _F_MENU_MAIN;
    RULE_SETTINGS();
}

function RULE_SETTINGS() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;
    _f_nextScreen='RULE_SETTINGS()';
    clearTimeout(_f_h5_next);
    xh+=margin;
    yh+=margin;
    _f_toggle_sprite_disp(0);
    _f_h5_menu_ja();
    _f_centerText('HEADINGS_2', xh+(w >> 1)-ch*4, yh+margin+ch*2, cs*8, cs, '#fff', '<b>'+_f_getText('MENU_TEXT_TITLE')+'</b>');
    SHOW_AUDIOMODE();
    setMenuItem('MENUBAR_RESTART', -8, 5, _f_getText('MENU_RETURN'), '', 1);
    _f_leftText('HD_3P', xh+cs*2, yh+ch*5, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_3P')+'</b>');
    _f_leftText('HD_2P', xh+cs*2, yh+ch*6.7, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_2P')+'</b>');
    _f_leftText('HD_KN', xh+cs*2, yh+ch*10.1, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_KABU')+'</b>');
    _f_leftText('HD_RL', xh+cs*2, yh+ch*14, cs*7, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_OPTIONS')+'</b>');
    _f_leftText('HD_OT', xh+cs*2, yh+ch*16, cs*7, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_OTHER')+'</b>');

    d=_f_textButton2(d, xh+cs*8,yh+ch*5,cs*5,cs,_f_getText('MENU_GAME_HANAAWASE'),'PLAY_HANAAWASE');
    d=_f_textButton2(d, xh+cs*13.5,yh+ch*5,cs*5,cs,_f_getText('MENU_GAME_88'),'PLAY_88');
    d=_f_textButton2(d, xh+cs*19,yh+ch*5,cs*5,cs,_f_getText('MENU_GAME_SUDAOSHI'),'PLAY_SUDAOSHI');
    d=_f_textButton2(d, xh+cs*27,yh+ch*5,cs*6,cs,_f_getText('MENU_GAME_3_600KEN'),'PLAY_3_600KEN');
    d=_f_textButton2(d, xh+cs*8,yh+ch*6.7,cs*5,cs,_f_getText('MENU_GAME_KOIKOI'),'PLAY_KOIKOI');
    d=_f_textButton2(d, xh+cs*13.5,yh+ch*6.7,cs*5,cs,_f_getText('MENU_GAME_MUSHI'),'PLAY_MUSHI');
    d=_f_textButton2(d, xh+cs*19,yh+ch*6.7,cs*6,cs,_f_getText('MENU_GAME_2_88'),'PLAY_2_88');
    d=_f_textButton2(d, xh+cs*27,yh+ch*6.7,cs*5,cs,_f_getText('MENU_GAME_2_600KEN'),'PLAY_2_600KEN');
    d=_f_textButton2(d, xh+cs*8,yh+ch*8.4,cs*5,cs,_f_getText('MENU_GAME_HACHI'),'PLAY_HACHI');
    d=_f_textButton2(d, xh+cs*8,yh+ch*10.1,cs*6,cs,_f_getText('MENU_GAME_OICHOKABU'),'PLAY_OICHOKABU');
    d=_f_textButton2(d, xh+cs*15,yh+ch*10.1,cs*5,cs,_f_getText('MENU_GAME_KYOKABU'),'PLAY_KYOKABU');

    d=_f_textButton2(d, xh+cs*8,yh+ch*14,cs*5,cs,_f_getText('MENU_OPT_GAME_RULES'),'RULE_MENU');
    d=_f_textButton2(d, xh+cs*15,yh+ch*14,cs*6,cs,_f_getText('MENU_OPT_OPTIONS'),'UI_SETTINGS', '一試合の局数(十二局または半ドン・一部ゲームを除く)もこちらで選べます。');
    _f_leftText('TO_PRODUCT_PAGE', xh+cs*8,yh+ch*16,cs*9,cs,'#fff', '<a style="color: #fff; font: inherit; font-weight: bold; text-decoration: none; " href="http:/'+'/www.marguerite.jp/Nihongo/Games/%E3%81%97%E3%82%89%E3%81%8E%E3%81%8F%E8%8A%B1%E6%9C%AD/index.html">'+_f_getText('MENU_OTHER_SITE')+'</a>');
    d=_f_textButton2(d, xh+cs*14,yh+ch*16,cs*4,cs,_f_getText('MENU_OTHER_ABOUT'),'ABOUT');
    _f_leftText('OTHER_PRODUCTS', xh+cs*19,yh+ch*16,cs*7,cs,'#fff', '<a style="color: #fff; font: inherit; font-weight: bold; text-decoration: none; " href="http:/'+'/www.marguerite.jp/Nihongo/Games/%E3%81%97%E3%82%89%E3%81%8E%E3%81%8F%E9%BA%BB%E9%9B%80/index.html">'+_f_getText('MENU_OTHER_MAHJONG')+'</a>');

    _f_h5_next=setTimeout('_f_wait4next(); ', 10);}

function RULE_MENU() {
    _f_currentMenu = _F_MENU_RULES_MAIN;

    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;

    _f_nextScreen='RULE_SETTINGS()';
    clearTimeout(_f_h5_next);

    xh+=margin;
    yh+=margin;
    _f_h5_menu_ja();
    _f_centerText('HEADINGS_2', xh+(w >> 1)-ch*2.5, yh+margin+ch*2, cs*5, cs, '#fff', '<b>'+_f_getText('MENU_OPT_GAME_RULES')+'</b>');
    SHOW_AUDIOMODE();
    setMenuItem('MENUBAR_RESTART', -8, 5, _f_getText('MENU_RETURN'), '', 1);
    _f_leftText('HD_3P', xh+cs*2, yh+ch*5, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_3P')+'</b>');
    _f_leftText('HD_2P', xh+cs*2, yh+ch*6.7, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_2P')+'</b>');
    _f_leftText('HD_KN', xh+cs*2, yh+ch*10.1, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_TEXT_KABU')+'</b>');
    d=_f_textButton2(d, xh+cs*8,yh+ch*5,cs*5,cs,_f_getText('MENU_GAME_HANAAWASE'),'RULE_HA');
    d=_f_textButton2(d, xh+cs*13.5,yh+ch*5,cs*5,cs,_f_getText('MENU_GAME_88'),'RULE_88');
    _f_leftText('NA'+d, xh+cs*19,yh+ch*5, cs*5, cs, '#ccc', _f_getText('MENU_GAME_SUDAOSHI'));
    d++;
    _f_leftText('NA'+d, xh+cs*27,yh+ch*5, cs*6, cs, '#ccc', _f_getText('MENU_GAME_3_600KEN'));
    d++;
    d=_f_textButton2(d, xh+cs*8,yh+ch*6.7,cs*5,cs,_f_getText('MENU_GAME_KOIKOI'),'RULE_KK');
    _f_leftText('NA'+d, xh+cs*13.5,yh+ch*6.7, cs*5, cs, '#ccc', _f_getText('MENU_GAME_MUSHI'));
    d++;
    d=_f_textButton2(d, xh+cs*19,yh+ch*6.7,cs*6,cs,_f_getText('MENU_GAME_2_88'),'RULE_88');
    _f_leftText('NA'+d, xh+cs*27,yh+ch*6.7, cs*5, cs, '#ccc', _f_getText('MENU_GAME_2_600KEN'));
    d++;
    _f_leftText('NA'+d, xh+cs*8,yh+ch*8.4, cs*5, cs, '#ccc', _f_getText('MENU_GAME_HACHI'));
    d++;
    d=_f_textButton2(d, xh+cs*8,yh+ch*10.1,cs*6,cs,_f_getText('MENU_GAME_OICHOKABU'),'RULE_OCK');
    d=_f_textButton2(d, xh+cs*15,yh+ch*10.1,cs*5,cs,_f_getText('MENU_GAME_KYOKABU'),'RULE_OCK');
    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'MENU');

    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}

function ABOUT() {
    _f_currentMenu = _F_MENU_ABOUT;

    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;

    _f_nextScreen='ABOUT()';
    clearTimeout(_f_h5_next);
    _f_h5_menu_ja();

    xh+=margin;
    yh+=margin;
    var e=document.getElementById('HEADINGS');
    e.style.width=Math.floor(18*40*rRatio)+'px';
    e.innerHTML='<b>'+_f_getText('MENU_ABOUT_TITLE')+'</b>';

    var e=document.getElementById('HEADINGS_VERSION');
    e.parentNode.removeChild(e);
    var e=document.getElementById('COPYRIGHT_CREDIT');
    e.parentNode.removeChild(e);

    _f_leftText('HD_V', xh, yh+ch*2, cs*16, cs, '#ff0', '<b>'+_f_getText('MENU_ABOUT_VER')+'</b>');
    _f_leftText('DT_V', xh+ch*16, yh+ch*2, cs*16, cs, '#fff', _f_getText('H5_MENU_VERSION'));
    _f_leftText('HD_AI', xh, yh+ch*3, cs*16, cs,'#ff0', '<b>'+_f_getText('MENU_ABOUT_AIVER')+'</b>');
    _f_leftText('DT_AI', xh+ch*16, yh+ch*3, cs*16, cs, '#fff', _f_getText('H5_MENU_AIVERSION'));
    _f_leftText('COPY', xh, yh+ch*5, cs*24, ch, '#fff', 'Copyright'+String.fromCharCode(0xA9)+_f_getText('H5_MENU_COPYRIGHT'));
    d=_f_textButton2(d, xh+cs*28.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'MENU');

    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}

function UI_SETTINGS() {
    _f_currentMenu = _F_MENU_OPTIONS;

    _f_cushion_color();

    document.onselectstart=new Function("return(true)");
    if (window.sidebar) {
        document.onmousedown=reEnable;
    }

    UI_SETTINGS_2();
}

function UI_SETTINGS_2() {
    var cs=30;
    margin=16;
    blines=4;
    bcolumns=16;
    var ch=cs+blines;
    var w=cs*32+margin*2+bcolumns*3;
    var h=cs*24+blines*5+cs+margin*2;
    var xh=600-w/2, yh=450-h/2;
    var d=10;

    _f_nextScreen='UI_SETTINGS_2()';
    clearTimeout(_f_h5_next);

    removeAllOfTextArea();
    _f_textWindow('OPTION_FIELD', xh, yh, w, h, '#fff');
    _f_leftText('HEADINGS', xh+margin, yh+margin, cs*14, cs, '#fff', '<b>'+_f_getText('MENU_OPT_OPTIONS')+'</b>');

    xh+=margin;
    yh+=margin;
    _f_leftText('H_GLEN',  xh, yh+ch*2, cs*6, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_ROUNDS')+'</b>');
    _f_leftText('H_GLEN_N',  xh+cs*10, yh+ch*3.7, cs*30, cs, '#fff', _f_getText('MENU_OPTS_ROUNDS_EXCLUDES'));
    _f_leftText('H_SOUND', xh, yh+ch*5.4, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_SOUNDS')+'</b>');
    _f_leftText('H_BGCL', xh, yh+ch*7.1, cs*5, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_MATCOLOUR')+'</b>');
    _f_leftText('H_CDCL', xh, yh+ch*8.8, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_CARDCOLOUR')+'</b>');
    _f_leftText('H_ASST', xh, yh+ch*10.5, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_MATCHES')+'</b>');
    _f_leftText('H_NAME', xh, yh+ch*12.2, cs*10, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_NAME')+'</b>');
    _f_leftText('H_RNAM', xh+cs*10, yh+ch*12.2, cs*5, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_NAME_RIGHT')+'</b>');
    _f_leftText('H_LNAM', xh+cs*10, yh+ch*13.9, cs*5, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_NAME_LEFT')+'</b>');
    _f_leftText('H_NNAM', xh+cs*10, yh+ch*15.6, cs*30, cs*2, '#fff', _f_getText('MENU_OPTS_NAME_EXCLUDES'));
    _f_leftText('H_NOSPRITE', xh, yh+ch*17.3, cs*7, cs, '#ff0', '<b>'+_f_getText('MENU_OPTS_ANIMS')+'</b>');

    d=_f_textButton(d, xh+cs*10,yh+ch*2,cs*4,cs,_f_getText('MENU_OPTS_ROUNDS_12'),'UI_game_kyokusu', 0);
    d=_f_textButton(d, xh+cs*15,yh+ch*2,cs*6,cs,_f_getText('MENU_OPTS_ROUNDS_6'),'UI_game_kyokusu', 1);
    if (noAudio) {
        var e=document.getElementById('H_SOUND');
        e.style.color='#660';
        _f_leftText('NOSOUND_ALL', xh+cs*10,yh+ch*5.4,cs*5,cs,'#666', _f_getText('MENU_OPTS_SOUNDS_ALL'));
        _f_leftText('NOSOUND_SOUND', xh+cs*16,yh+ch*5.4,cs*7,cs,'#666', _f_getText('MENU_OPTS_SOUNDS_NOMUSIC'));
    }
    else {
        d=_f_textButton(d, xh+cs*10,yh+ch*5.4,cs*4,cs,_f_getText('MENU_OPTS_SOUNDS_ALL'),'UI_silence', 0);
        d=_f_textButton(d, xh+cs*15,yh+ch*5.4,cs*6,cs,_f_getText('MENU_OPTS_SOUNDS_NOMUSIC'),'UI_silence', 2);
    }
    d=_f_textButton(d, xh+cs*10,yh+ch*7.1,cs*4,cs,_f_getText('MENU_OPTS_MATCOLOUR_BLACK'),'UI_cushion', 0);
    d=_f_textButton(d, xh+cs*15,yh+ch*7.1,cs*4,cs,_f_getText('MENU_OPTS_MATCOLOUR_BLUE'),'UI_cushion', 1);
    d=_f_textButton(d, xh+cs*20,yh+ch*7.1,cs*4,cs,_f_getText('MENU_OPTS_MATCOLOUR_GREEN'),'UI_cushion', 2);
    d=_f_textButton(d, xh+cs*25,yh+ch*7.1,cs*4,cs,_f_getText('MENU_OPTS_MATCOLOUR_CRIMSON'),'UI_cushion', 3);
    d=_f_textButton(d, xh+cs*10,yh+ch*8.8,cs*4,cs,_f_getText('MENU_OPTS_CARDCOLOUR_BLACK'),'UI_fudaBack', 1);
    d=_f_textButton(d, xh+cs*15,yh+ch*8.8,cs*4,cs,_f_getText('MENU_OPTS_CARDCOLOUR_BROWN'),'UI_fudaBack', 0);
    d=_f_textButton(d, xh+cs*20,yh+ch*8.8,cs*5,cs,_f_getText('MENU_OPTS_CARDCOLOUR_ALT'),'UI_fudaBack', -1);
    d=_f_textButton(d, xh+cs*10,yh+ch*10.5,cs*6,cs,_f_getText('MENU_OPTS_MATCHES_OFF'),'UI_torefuda_mark', 0);
    d=_f_textButton(d, xh+cs*17,yh+ch*10.5,cs*6,cs,_f_getText('MENU_OPTS_MATCHES_ON'),'UI_torefuda_mark', 1);

    newTextArea('NAME_R_CONT', xh+cs*15, yh+ch*12.2, cs*6, cs, 27, '#fff', '#000');
    newTextArea('NAME_L_CONT', xh+cs*15, yh+ch*13.9, cs*6, cs, 27, '#fff', '#000');
    var e=document.getElementById('NAME_R_CONT');
    e.innerHTML='<input type="text" id="NAME_R" style="font-size: '+Math.floor(26*rRatio)+'px; padding: '+Math.floor(0.25*rRatio)+'px;  font-family: serif; " value="'+_f_rule_sel['UI_right_name']+'">';
    e=document.getElementById('NAME_L_CONT');
    e.innerHTML='<input type="text" id="NAME_L" style="font-size: '+Math.floor(26*rRatio)+'px; padding: '+Math.floor(0.25*rRatio)+'px;  font-family: serif; " value="'+_f_rule_sel['UI_left_name']+'">';
    var e=document.getElementById('NAME_R');
    e.onchange=function() {
        if (this.value)
            _f_rule_sel['UI_right_name']=this.value;
        else this.value=_f_rule_sel['UI_right_name'];
    };
    var e=document.getElementById('NAME_L');
    e.onchange=function() {
        if (this.value)
            _f_rule_sel['UI_left_name']=this.value;
        else
            this.value=_f_rule_sel['UI_left_name'];
    };

    d=_f_textButton(d, xh+cs*10,yh+ch*17.3,cs*6,cs,_f_getText('MENU_OPTS_ANIMS_ON'),'UI_noSprite', 0);
    d=_f_textButton(d, xh+cs*17,yh+ch*17.3,cs*6,cs,_f_getText('MENU_OPTS_ANIMS_OFF'),'UI_noSprite', 1);

    d=_f_textButton2(d, xh+cs*29.5,yh,cs*5,cs,String.fromCharCode(9664)+_f_getText('MENU_TEXT_TITLE'),'UI_SETTINGS_3');
    _f_h5_next=setTimeout('_f_wait4next(); ', 10);
}


function UI_SETTINGS_3() {
    if (!_f_rule_sel['UI_right_name'])
        _f_rule_sel['UI_right_name']='真希';
    if (!_f_rule_sel['UI_left_name'])
        _f_rule_sel['UI_left_name']='架純';
    document.onselectstart=new Function("return(false)");
    if (window.sidebar) {
        document.onmousedown=disableselect;
        document.onclick=reEnable;
    }
    _f_h5_next=setTimeout('RULE_SELECTEND(); ', 10);
}

_f_toggle_sprite=0;
_f_toggle_sprite_last_mode=0; // For lang_lut
function _f_toggle_sprite_disp(mode) {
    var str=_f_getText('MENU_ANIMS_ON'), pos=9, len=7;
    if (_f_rule_sel['UI_noSprite'])
        str=_f_getText('MENU_ANIMS_OFF');
    if (mode) {
        setMenuItem('MENU_ANIMATEEFFECT', pos*14, len, str, '_f_toggle_sprite_sub()', 0);
    }
    else {
        setMenuItem('MENU_ANIMATEEFFECT', pos*14, len, str, '', 1);
    }
    _f_toggle_sprite_last_mode=mode;
}

function _f_toggle_sprite_sub() {
    clearTimeout(_f_toggle_sprite);
    if (_f_movie_ctr>0) {
        _f_toggle_sprite=setTimeout('_f_toggle_sprite_sub();', 10);
        return;
    }

    var i=_h5_sprite.length;
    while (--i>-1) {
        if (_h5_sprite[i].id)
            hideSprite(_h5_sprite[i].id);
    }

    _f_rule_sel['UI_noSprite']=_f_rule_sel['UI_noSprite'] ? 0 : 1;
    graph_noSprite=_f_rule_sel['UI_noSprite'];
    _f_toggle_sprite_disp(1);

    try {
        localStorage.setItem('Marguerite_FlaJong-UI_noSprite', _f_rule_sel['UI_noSprite']);
    }
    catch (e) {
        ;
    }
}
