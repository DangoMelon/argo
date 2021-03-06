'reinit'
'set display color white'
'c'
'set grads off'
'rgbset2'

outdir='../Output/'
name='prof3901231_clim_trajl'

iso=16

opt='0.8 0.6 0.8 2 0.6 0.8'
clev='-6 -5 -4 -3 -2 -1 -0.5 0.5 1  2  3  4  5  6'
ccols='49 48  47 46 44 42 41   0  21 22 24 26 27 28 29'
cols='9 14 4 11 5 13 3 10 7 12 8 2 6'

'sdfopen /data/users/grivera/ARGO-prof/3901231_godas.nc'
'sdfopen /data/users/grivera/ARGO-prof/3901231_soda.nc'
'sdfopen /data/users/grivera/ARGO-prof/3901231_imarpe.nc'
'xdfopen /data/users/grivera/GODAS/clim/godas_dayclim.ctl'

***************
'set t last'
'q dims'
timeinfo=sublin(result,5)
timefnum=subwrd(timeinfo,9)
dateinfo=subwrd(timeinfo,6)
datef=substr(dateinfo,4,9)

'set t 'timefnum-365
'q dims'
timeinfo=sublin(result,5)
timeinum=subwrd(timeinfo,9)
dateinfo=subwrd(timeinfo,6)
datei=substr(dateinfo,4,9)
*******************

'set time 'datei' 'datef
'set lev 0 500'

********************************
'set time 'datei' 'datef
'define tsuav = ave(temp_anom.1,t-5,t+5)'
'tsuav = ave(tsuav,t-5,t+5)'
'define temp = ave(temperature.1,t-5,t+5)'
'temp = ave(temp,t-5,t+5)'

'subplot 3 2 2 'opt
'set gxout shaded'
'set yflip on'
'set clevs 'clev
'set ccols 'ccols
'd tsuav'

'set gxout contour'
'set clevs 'clev
'set cthick 1'
'd tsuav'

'set ccolor 1'
'set clevs 'iso
'set cthick 6'
'set clab masked'
'd temp'

t0=datef
y0=500
'q w2xy 't0' 'y0
xf=subwrd(result,3); yf=subwrd(result,6)

ncol=1
timefnum_=timefnum
while (timeinum < timefnum_)
    'set line 'subwrd(cols,ncol)' 1 12'
    timefnum_=timefnum_-30
    if (timefnum_ < timeinum)
        timefnum_=timeinum
    endif
    'set t 'timefnum_
    'q time'
    dateinfo=subwrd(result,3)
    daten=substr(dateinfo,4,9)
    'q w2xy 'daten' 'y0
    xi=subwrd(result,3); yi=subwrd(result,6)
    'drawpoly 'xi' 'yf' 'xf' 'yf
    xf=xi; yf=yi; ncol=ncol+1
endwhile


********************************
'set time 'datei' 'datef
'define tsuav = ave(temp_anom.2,t-5,t+5)'
'tsuav = ave(tsuav,t-5,t+5)'
'define temp = ave(temperature.2,t-5,t+5)'
'temp = ave(temp,t-5,t+5)'

'subplot 3 2 4 'opt
'set gxout shaded'
'set yflip on'
'set clevs 'clev
'set ccols 'ccols
'd tsuav'

'set gxout contour'
'set clevs 'clev
'set cthick 1'
'd tsuav'

'set ccolor 1'
'set clevs 'iso
'set cthick 6'
'set clab masked'
'd temp'

t0=datef
y0=500
'q w2xy 't0' 'y0
xf=subwrd(result,3); yf=subwrd(result,6)

ncol=1
timefnum_=timefnum
while (timeinum < timefnum_)
    'set line 'subwrd(cols,ncol)' 1 12'
    timefnum_=timefnum_-30
    if (timefnum_ < timeinum)
        timefnum_=timeinum
    endif
    'set t 'timefnum_
    'q time'
    dateinfo=subwrd(result,3)
    daten=substr(dateinfo,4,9)
    'q w2xy 'daten' 'y0
    xi=subwrd(result,3); yi=subwrd(result,6)
    'drawpoly 'xi' 'yf' 'xf' 'yf
    xf=xi; yf=yi; ncol=ncol+1
endwhile


********************************
'set time 'datei' 'datef
'define tsuav = ave(temp_anom.3,t-5,t+5)'
'tsuav = ave(tsuav,t-5,t+5)'
'define temp = ave(temperature.3,t-5,t+5)'
'temp = ave(temp,t-5,t+5)'

'subplot 3 2 6 'opt
'set gxout shaded'
'set yflip on'
'set clevs 'clev
'set ccols 'ccols
'd tsuav'

'set gxout contour'
'set clevs 'clev
'set cthick 1'
'd tsuav'

'set ccolor 1'
'set clevs 'iso
'set cthick 6'
'set clab masked'
'd temp'

'cbarn 0.6 0 8.2 0.4'

t0=datef
y0=500
'q w2xy 't0' 'y0
xf=subwrd(result,3); yf=subwrd(result,6)

ncol=1
timefnum_=timefnum
while (timeinum < timefnum_)
    'set line 'subwrd(cols,ncol)' 1 12'
    timefnum_=timefnum_-30
    if (timefnum_ < timeinum)
        timefnum_=timeinum
    endif
    'set t 'timefnum_
    'q time'
    dateinfo=subwrd(result,3)
    daten=substr(dateinfo,4,9)
    'q w2xy 'daten' 'y0
    xi=subwrd(result,3); yi=subwrd(result,6)
    'drawpoly 'xi' 'yf' 'xf' 'yf
    xf=xi; yf=yi; ncol=ncol+1
endwhile

****************
'set dfile 4'
'subplot 1 2 1 'opt
'set mpdset hires'
'set mpt 0 15 1 6'
'set mpt 1 15 1 6'
'set mpt 2  1 3 3'
'set t last'
'set lat -8 -1'
'set lev 0'
'set lon 275 282'
'set map 1 1 4'
'set clevs 0'
'set ylint 1'
'set xlint 1'
'set ccols 0 0'
'd pottmp.4'

status = 0
plat=0
plon=0
ncol=1
n=0
col = 9
while (status != 2)
    marks = read('/data/users/grivera/ARGO-prof/3901231-traj1.txt')
    lat = subwrd(marks,3)
    lon = subwrd(marks,4)
    class = subwrd(marks,5)
    if (n=0)
        pclass=class
    endif
    if (class!=pclass)
        ncol = ncol +1
        col=subwrd(cols,ncol)
        pclass=class
    endif
    if (plat!=0)
        'set line 'col
        'drawpoly opened -by world 'plon' 'plat' 'lon' 'lat
    endif
    status = subwrd(marks,1)
    plat=lat
    plon=lon
    n=n+1
endwhile


'set strsiz 0.15 0.2'
'set string 1 c 5'
'draw string 2.8 7.85 ARGO Profiler #3901231'

'set strsiz 0.093 0.1'
'set string 1 c 3'
'draw string 2.8 7.59 'datei'-'datef


'set strsiz 0.093 0.1'
'set string 1 l 6'
'draw string 5.9 7.9 a)'
'draw string 5.9 5.4 b)'
'draw string 5.9 2.9 c)'

'set strsiz 0.093 0.1'
'set string 1 l 3'
'draw string 0.42 1 Source: ARGO GDAC   Processing: IGP   Latest data: 'daten
'draw string 0.42 0.75 Clim: 1981-2010 - a)GODAS, b)SODA, c)IMARPE'
'draw string 0.42 0.5 11-day running mean x2'


st=0
while (st != 2)
    mark = read('/data/users/grivera/ARGO-prof/3901231-traj2.txt')
    st = subwrd(mark,1)
    if (st=2)
        break
    endif
    lat = subwrd(mark,3)
    lon = subwrd(mark,4)
    'set line 1 1 4'
    'drawmark triangle 'lon' 'lat' 0.06 -by world'
endwhile

************
'gxprint 'outdir''name'.eps'
'gxprint 'outdir''name'.png'













