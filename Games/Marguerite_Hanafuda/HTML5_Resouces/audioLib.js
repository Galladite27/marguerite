audio_initialized=0;
noAudio=0; // Audio failed to load initially - value indicates reason
silentMode=1; // If audio is user-muted
audioObj=new Array();
audioObj[0]=null;
audio_alertFlag=0;

function AUDIO_INIT() {
    if (audio_initialized)
        return;
    audio_initialized=1;
    
    if (navigator.userAgent.indexOf('Android') > -1 || 
        navigator.userAgent.indexOf('iPhone') > -1 ||
        navigator.userAgent.indexOf('iPod') > -1 ||
        navigator.userAgent.indexOf('iPad') > -1) {
            noAudio=1;
            setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'NOAUDIO_ALERT()', 1);
            return;
    }
    
    if (navigator.userAgent.indexOf('Goanna/') > -1) {
        noAudio=2;
        setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'NOAUDIO_ALERT()', 1);
        return;
    }
    
    else {
        try {
            j=4;
            while (--j>-1) {
                i='kirifuda'+j;
                audioObj[i]=new Audio;
                audioObj[i].controls=false;
                audioObj[i].autoplay=true;
                audioObj[i].src=audio['kirifuda'];
                audioObj[i].load();
                audioObj[i].volume=0;
            }
            
            j=4;
            while (--j>-1) {
                i='mekurifuda'+j;
                audioObj[i]=new Audio;
                audioObj[i].controls=false;
                audioObj[i].autoplay=true;
                audioObj[i].src=audio['mekurifuda'];
                audioObj[i].load();
                audioObj[i].volume=0;
            }
            
            for (i in audio) {
                audioObj[i]=new Audio;
                audioObj[i].controls=false;
                audioObj[i].autoplay=false;
                audioObj[i].src=audio[i];
                audioObj[i].load();
            }
        }
        catch (e) {
            noAudio=3;
            setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'AUDIO_TOGGLE()', 0);
            return;
        }
    }
    
    silentMode=0;
    audioObj[0]=null;
    setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_ON'), 'AUDIO_TOGGLE()', 0);
}

function SHOW_AUDIOMODE() {
    if (noAudio) {
        setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'NOAUDIO_ALERT()', 1);
    }
    else {
        if(silentMode)
            setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'AUDIO_TOGGLE()', 0);
        else
            setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_ON'), 'AUDIO_TOGGLE()', 0);
    }
}

function NOAUDIO_ALERT() {
    if(noAudio>1)
        alert(_f_getText('NOAUDIO_ALERT_1'));
    else if(noAudio>2)
        alert(_f_getText('NOAUDIO_ALERT_2'));
    else alert(_f_getText('NOAUDIO_ALERT_OTHER'));
}

function AUDIO_TOGGLE() {
    if (silentMode) {
        silentMode=0;
        var i, j;
        setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_ON'), 'AUDIO_TOGGLE()', 0);
        return;
    }
    
    setMenuItem('MENU_AUDIO', 8, 5, _f_getText('MENU_AUDIO_OFF'), 'AUDIO_TOGGLE()', 0);
    silentMode=1;
}

function AUDIO_OUTPUT(audio_data, ifLoop) {
    if(noAudio || silentMode || !audioObj[audio_data]) return;
    audioObj[audio_data].loop=ifLoop;
    audioObj[audio_data].volume=1;
    audioObj[audio_data].play();
}
