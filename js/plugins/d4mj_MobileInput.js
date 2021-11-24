/*:
 * @plugindesc 手机按钮插件
 * @author 第四梦境
 * @help 手机按钮插件
  *利用规约：你可以免费将本插件用于免费或商业游戏，不得修改本插件的作者名
 *使用方法：
 *  判断是否按着(Press)：Input.isPressed(键值)
 *  双击MIBTS选项可以设置按键。
 *  该插件只在手机端有效，pc端测试无效
 *
 * @param MIDIVBWidth
 * @desc 键盘基础div宽
 * @type number
 * @default 1280
 *
 * @param MIDIVBHeight
 * @desc 按钮基础div高
 * @type number
 * @default 720
 *
 * @param MIDIVBBackground
 * @desc 按钮基础div背景图片
 * @type file
 * @dir img/system/
 * @default MIDIVB
 * @require 1
 *
 * @param MIBTS
 * @desc 按钮集合
 * @type struct<MIBT>[]
 * @default ["{\"keyval\":\"ok\",\"imgup\":\"MIbt_oku\",\"imgdown\":\"MIbt_okd\",\"x\":\"1120\",\"y\":\"600\",\"width\":\"90\",\"height\":\"90\"}","{\"keyval\":\"shift\",\"imgup\":\"MIbt_shiftu\",\"imgdown\":\"MIbt_shiftd\",\"x\":\"1060\",\"y\":\"520\",\"width\":\"90\",\"height\":\"90\"}","{\"keyval\":\"escape\",\"imgup\":\"MIbt_escu\",\"imgdown\":\"MIbt_escd\",\"x\":\"40\",\"y\":\"102\",\"width\":\"90\",\"height\":\"90\"}","{\"keyval\":\"up\",\"imgup\":\"MIbt_upu\",\"imgdown\":\"MIbt_upd\",\"x\":\"110\",\"y\":\"450\",\"width\":\"80\",\"height\":\"120\"}","{\"keyval\":\"down\",\"imgup\":\"MIbt_downu\",\"imgdown\":\"MIbt_downd\",\"x\":\"110\",\"y\":\"590\",\"width\":\"80\",\"height\":\"120\"}","{\"keyval\":\"left\",\"imgup\":\"MIbt_leftu\",\"imgdown\":\"MIbt_leftd\",\"x\":\"20\",\"y\":\"540\",\"width\":\"120\",\"height\":\"80\"}","{\"keyval\":\"right\",\"imgup\":\"MIbt_rightu\",\"imgdown\":\"MIbt_rightd\",\"x\":\"160\",\"y\":\"540\",\"width\":\"120\",\"height\":\"80\"}","{\"keyval\":\"pageup\",\"imgup\":\"MIbt_pageupu\",\"imgdown\":\"MIbt_pageupd\",\"x\":\"1220\",\"y\":\"280\",\"width\":\"32\",\"height\":\"32\"}","{\"keyval\":\"pagedown\",\"imgup\":\"MIbt_pagedownu\",\"imgdown\":\"MIbt_pagedownd\",\"x\":\"1220\",\"y\":\"360\",\"width\":\"32\",\"height\":\"32\"}"]
 *
 */
 
 /*~struct~MIBT:
 *
 * @param keyval
 * @desc 设置键值
 * @type string
 * @default 
 *
 * @param imgup
 * @desc imgup为按钮没有被按着时的图片
 * @type file
 * @dir img/system/
 * @require 1
 *
 * @param imgdown
 * @desc imgdown为按钮被按着时的图片
 * @type file
 * @dir img/system/
 * @require 1
 *
 * @param x
 * @desc 按钮x坐标
 * @type number
 * @default 0
 *
 * @param y
 * @desc 按钮y坐标
 * @type number
 * @default 0
 *
 * @param width
 * @desc 按钮宽
 * @type number
 * @default 0
 *
 * @param height
 * @desc 按钮高
 * @type number
 * @default 0
 *
 */
 

 var $d4mj_MobileInput = {};
 
 $d4mj_MobileInput.Parameters = PluginManager.parameters('d4mj_MobileInput');
 
 var $MIBTS = [];
 
(function () {
	var MIBTST = JSON.parse($d4mj_MobileInput.Parameters["MIBTS"]);
    for (var i = 0; i < MIBTST.length; i++) {
		var MIBTSTi1 = JSON.parse(MIBTST[i]);
		var MIBTSTi2 = {};
		MIBTSTi2.keyval = MIBTSTi1.keyval;
		MIBTSTi2.imgup = 'img/system/' + MIBTSTi1.imgup + '.png';
		MIBTSTi2.imgdown = 'img/system/' + MIBTSTi1.imgdown + '.png';
		MIBTSTi2.x = MIBTSTi1.x * 1;
		MIBTSTi2.y = MIBTSTi1.y * 1;
		MIBTSTi2.width = MIBTSTi1.width * 1;
		MIBTSTi2.height = MIBTSTi1.height * 1;
	    $MIBTS.push(MIBTSTi2);
    }
	

Graphics._createMIDIVB = function() {
    this._MIDIVB = document.createElement('div');
    this._MIDIVB.id = 'MIDIVB';
	this._MIDIVB.style.background = 'url('+'img/system/' + $d4mj_MobileInput.Parameters['MIDIVBBackground'] +'.png) top left / contain no-repeat';
	this._createMIBTS();
    this._updateMIDIVB();
    document.body.appendChild(this._MIDIVB);
};

Graphics._createMIBTS = function() {
	this.MIBTS = [];
	for (var i = 0; i < $MIBTS.length; i++) {
		this.MIBTS.push(document.createElement('div'));
		this.MIBTS[i].id = 'MIBT' + i;
		this.MIBTS[i].keyval = $MIBTS[i].keyval;
		this.MIBTS[i].imgup = $MIBTS[i].imgup;
		this.MIBTS[i].imgdown = $MIBTS[i].imgdown;
		this.MIBTS[i].style.background = 'url(' + $MIBTS[i].imgup +') top left / contain no-repeat';
		
		this.MIBTS[i].addEventListener('touchstart', function(e) {
			Input._currentState[e.target.keyval] = true;//alert(e.target.id);
			e.target.style.background = 'url(' + e.target.imgdown +') top left / contain no-repeat';
		}, false);
		this.MIBTS[i].addEventListener('touchend', function(e) {
			Input._currentState[e.target.keyval] = false;//alert(e.target.id);
			e.target.style.background = 'url(' + e.target.imgup +') top left / contain no-repeat';
		}, false);
		
		this._MIDIVB.appendChild(this.MIBTS[i]);
	}
};

Graphics._updateMIDIVB = function() {
    this._MIDIVB.width = $d4mj_MobileInput.Parameters['MIDIVBWidth'] * 1;
    this._MIDIVB.height = $d4mj_MobileInput.Parameters['MIDIVBHeight'] * 1;
    this._MIDIVB.style.zIndex = 8;
    this._centerElement(this._MIDIVB);
	this._updateMIBTS();
};

Graphics._updateMIBTS = function() {
	for (var i = 0; i < $MIBTS.length; i++) {
		this.MIBTS[i].width = $MIBTS[i].width * this._realScale;
		this.MIBTS[i].height = $MIBTS[i].height * this._realScale;
		this.MIBTS[i].style.zIndex = 9;
		
        this.MIBTS[i].style.position = 'absolute';
        this.MIBTS[i].style.margin = 'auto';
        this.MIBTS[i].style.top = $MIBTS[i].y  * this._realScale + 'px';
        this.MIBTS[i].style.left = $MIBTS[i].x * this._realScale + 'px';
        this.MIBTS[i].style.right = ($d4mj_MobileInput.Parameters['MIDIVBWidth'] * 1 - ($MIBTS[i].x + $MIBTS[i].width)) * this._realScale + 'px';
        this.MIBTS[i].style.bottom = ($d4mj_MobileInput.Parameters['MIDIVBHeight'] * 1 - ($MIBTS[i].y + $MIBTS[i].height)) * this._realScale + 'px';
        this.MIBTS[i].style.width = this.MIBTS[i].width + 'px';
        this.MIBTS[i].style.height = this.MIBTS[i].height + 'px';
	}
};

var Graphics_d4mj_MobileInput_createAllElements = Graphics._createAllElements;
Graphics._createAllElements = function() {
    Graphics_d4mj_MobileInput_createAllElements.call(this);
	this._createMIDIVB();
};

var Graphics_d4mj_MobileInput_updateAllElements = Graphics._updateAllElements;
Graphics._updateAllElements = function() {
    Graphics_d4mj_MobileInput_updateAllElements.call(this);
	this._updateMIDIVB();
};

Graphics._updateRealScale = function() {
    if (this._stretchEnabled) {
        var h = window.innerWidth / $d4mj_MobileInput.Parameters['MIDIVBWidth'] * 1;
        var v = window.innerHeight / $d4mj_MobileInput.Parameters['MIDIVBHeight'] * 1;
        this._realScale = Math.min(h, v);
    } else {
        this._realScale = this._scale;
    }
};

Scene_Map.prototype.isMenuCalled = function() {
    return Input.isTriggered('menu');// || TouchInput.isCancelled();
};

})();//alert($MIBTS[0].imgup);

