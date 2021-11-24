//=============================================================================
// Yanfly Engine Plugins - Core Engine
// YEP_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CoreEngine = true;

var Yanfly = Yanfly || {};
Yanfly.Core = Yanfly.Core || {};
Yanfly.Core.version = 1.23;

//=============================================================================
/*:
 * @plugindesc 云汉版❀YEP动作序列✔基础功能核心 A组[一]
 * @author Yanfly Engine Plugins  汉化:硕明云书
 *
 * @param ▁▂▃▄▄ 屏幕功能区 ▄▄▃▂▁
 * @default
 * @param Screen Width
 * @text 自定义屏幕窗口宽度   ☞
 * @desc 可以自定义屏幕窗口的宽度.
 * 默认窗口宽度: 816
 * @default 816
 *
 * @param Screen Height
 * @text 自定义屏幕窗口高度   ☞
 * @desc 可以自定义屏幕窗口的高度.
 * 默认窗口高度: 624
 * @default 624
 *
 * @param Scale Battlebacks
 * @text 选择定义到战斗模式   ☞
 * @desc 自定义屏幕窗口是否适应到战斗模式中？
 * 否 - false     是 - true
 * @default true
 *
 * @param Scale Title
 * @text 选择定义到标题界面   ☞
 * @desc 自定义屏幕窗口是否适应到标题界面中？
 * 否 - false     是 - true
 * @default true
 *
 * @param Scale Game Over
 * @text 选择定义到结束界面   ☞
 * @desc 自定义窗口是否适应到游戏结束界面中？
 * 否 - false     是 - true
 * @default true
 *
 * @param Open Console
 * @text 选择定义到设置界面   ☞
 * @desc 自定义窗口是否适应到游戏设置界面中？
 * 否 - false     是 - true
 * @default false
 *
 * @param Reposition Battlers
 * @text 选择重新定义战斗图   ☞
 * @desc 允许插件重新定位战斗图么?
 * 否 - false     是 - true
 * @default true
 *
 * @param GameFont Load Timer
 * @text 自定义加载字体时间   ☞
 * @desc 设置加载游戏字体的时间.初期建议保持默认参数，
 * 参数设置 0 为无限时间. 上限建议不要超过:20000
 * @default 0
 *
 * @param Update Real Scale
 * @text 屏幕拉伸效果开关阀   ☞
 * @desc 慎重开启此项，初期请保持默认状态。
 * 关闭 - false   Y开启 - true
 * @default false
 *
 * @param Collection Clear
 * @text 切档清理缓存开关阀   ☞
 * @desc 在切换主要场景时清除存储的对象 此项建议默认
 * 从而释放内存不占用多余空间. 关闭 - false   开启 - true
 * @default true
 *
 * @param ▁▂▃▄▄ 金钱功能区 ▄▄▃▂▁
 * @desc
 *
 * @param Gold Max
 * @text 自定义玩家金钱上限   ☞
 * @desc 可定义玩家拥有最大的金钱数量。
 * 上限值: 99999999
 * @default 99999999
 *
 * @param Gold Font Size
 * @text 自定义金钱字体大小   ☞
 * @desc 可定义金钱字体显示大小。
 * 默认大小: 28
 * @default 20
 *
 * @param Gold Icon
 * @text 自定义金钱图标样式   ☞
 * @desc 可用ICON图片用来代表黄金的字符显示
 * 参数为0 则不会显示图标 img\system\IconSet.png
 * @default 313
 *
 * @param Gold Overlap
 * @text 金钱值分配范围大小   ☞
 * @desc 初期建议保持默认参数，
 * 默认参数 A lotta
 * @default A lotta
 *
 * @param ▁▂▃▄▄ 道具功能区 ▄▄▃▂▁
 * @desc
 *
 * @param Default Max
 * @text 自定义玩家道具上限   ☞
 * @desc 自定义玩家可持有的道具上限
 * 默认参数: 99
 * @default 99
 *
 * @param Quantity Text Size
 * @text 定义条目数字体大小   ☞
 * @desc 条目数量文本字体大小显示。
 * 默认参数: 28
 * @default 20
 *
 * @param ▁▂▃▄▄ 数据功能区 ▄▄▃▂▁
 * @default
 *
 * @param Max Level
 * @text 自定义玩家等级上限   ☞
 * @desc 可自定义玩家等级上限数量
 * 默认参数: 99
 * @default 99
 *
 * @param Actor MaxHP
 * @text 自定义玩家血量上限   ☞
 * @desc 可自定义玩家血量上限数量
 * 默认参数: 9999
 * @default 9999
 *
 * @param Actor MaxMP
 * @text 自定义玩家法值上限   ☞
 * @desc 可自定义玩家法值上限数量
 * 默认参数: 9999
 * @default 9999
 *
 * @param Actor Parameter
 * @text 自定义角色人数上限   ☞
 * @desc 可自定义角色上限数量
 * 默认参数: 999
 * @default 999
 *
 * @param Enemy MaxHP
 * @text 自定义敌方血值上限   ☞
 * @desc 可自定义敌人血量上限数量
 * 上限值: 999999
 * @default 999999
 *
 * @param Enemy MaxMP
 * @text 自定义敌方法值上限   ☞
 * @desc 可自定义敌人法值上限数量
 * 默认参数: 9999
 * @default 9999
 *
 * @param Enemy Parameter
 * @text 自定义敌方人数上限   ☞
 * @desc 可自定义敌方人数数量上限 
 * 默认参数: 999
 * @default 999
 *
 * @param ▁▂▃▄▄ 战斗功能区 ▄▄▃▂▁
 * @desc
 *
 * @param Animation Rate
 * @text 定义战斗动画速度值   ☞
 * @desc 调整战斗动画的速度。数值小于4速度越快！
 * 默认参数: 4
 * @default 4
 *
 * @param Flash Target
 * @text 敌方目标效果开关阀   ☞
 * @desc 如果目标是敌人，它会闪光或变白。
 * OFF - false     ON - true
 * @default false
 *
 * @param Show Events Transition
 * @text 战斗进行时事件显示   ☞
 * @desc 在战斗过渡期间显示事件
 * SHOW - true     HIDE - false     Default: false
 * @default true
 *
 * @param Show Events Snapshot
 * @text 战斗背景期事件显示   ☞
 * @desc 在战斗背景过程中显示事件
 * SHOW - true     HIDE - false     Default: false
 * @default true
 *
 * @param ▁▂▃▄▄ 字体功能区 ▄▄▃▂▁
 * @desc
 *
 * @param Chinese Font
 * @text 自定义中文默认字体   ☞
 * @desc 中文RPG的默认字体。
 * 默认字体: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Korean Font
 * @text 自定义韩文默认字体   ☞
 * @desc 韩国RPG的默认字体。
 * 默认字体: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Default Font
 * @text 自定义其他默认字体   ☞
 * @desc 默认字体(s)用于其他一切。
 * 默认字体: GameFont
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param Font Size
 * @text 自定义默认字体大小   ☞
 * @desc 自定义默认字体大小。
 * 默认参数: 28
 * @default 28
 *
 * @param Text Align
 * @text 自定义对齐窗口文本   ☞
 * @desc 对齐命令窗口的文本
 * 左[left]    中[center]    右[right]
 * @default left
 *
 * @param ▁▂▃▄▄ 窗口功能区 ▄▄▃▂▁
 * @default
 *
 * @param Digit Grouping
 * @text 数字位数功能开关     ☞
 * @desc 逗号将数字组合，关闭则无逗号
 * false - 关闭     true - 开启
 * @default false
 *
 * @param Line Height
 * @text 自定义窗口通用高     ☞
 * @desc 调整窗口使用的通用行高
 * 默认参数: 36
 * @default 36
 *
 * @param Icon Width
 * @text 自定义图标宽度值     ☞
 * @desc 可自定义调整图标的宽度
 * 默认参数: 32
 * @default 32
 *
 * @param Icon Height
 * @text 自定义图标高度值     ☞
 * @desc 可自定义调整图标的高度
 * 默认参数: 32
 * @default 32
 *
 * @param Face Width
 * @text 自定义脸图宽度值     ☞
 * @desc 可自定义调整脸图宽度值
 * 默认参数: 144
 * @default 144
 *
 * @param Face Height
 * @text 自定义脸图高度值     ☞
 * @desc 可自定义调整脸图高度值
 * 默认参数: 144
 * @default 144
 *
 * @param Window Padding
 * @text 自定义窗口适应值     ☞
 * @desc 调整所有标准窗口的填充适应度
 * 默认参数: 18
 * @default 18
 *
 * @param Text Padding
 * @text 自定义文本内边值     ☞
 * @desc 自定义调整窗口文本内边值
 * 默认参数: 6
 * @default 6
 *
 * @param Window Opacity
 * @text 窗口背景不透明度     ☞
 * @desc 调整窗口的背景不透明度
 * 默认参数: 192
 * @default 192
 *
 * @param Gauge Outline
 * @text 状态轮廓线开关阀     ☞
 * @desc 是否启用轮廓
 * false - 关闭     true - 开启
 * @default true
 *
 * @param Gauge Height
 * @text 状态边框高度显示     ☞
 * @desc 设置状态边框高度显示。
 * 默认参数: 6
 * @default 18
 *
 * @param Menu TP Bar
 * @text 怒气值功能开启阀     ☞
 * @desc 在角色的菜单状态中绘制一个TP条
 * false - OFF     true - ON
 * @default true
 *
 * @param ▁▂▃▄▄ 颜色功能区 ▄▄▃▂▁
 * @default
 *
 * @param Color: Normal
 * @text 自定义文本颜色值     ☞
 * @desc 更改窗口的文本颜色。
 * 默认参数: 0
 * @default 0
 *
 * @param Color: System
 * @text 自定义文本颜色值     ☞
 * @desc 更改窗口的文本颜色。
 * Default: 16
 * @default 16
 *
 * @param Color: Crisis
 * @text 自定义文本颜色值     ☞
 * @desc 更改窗口的文本颜色
 * Default: 17
 * @default 17
 *
 * @param Color: Death
 * @text 自定死亡文本色值     ☞
 * @desc 自定义死亡文本颜色
 * 默认参数: 18
 * @default 18
 *
 * @param Color: Gauge Back
 * @text 自定返回文本色值     ☞
 * @desc 自定义返回文本颜色
 * 默认参数: 19
 * @default 19
 *
 * @param Color: HP Gauge 1
 * @text 自定血量文本颜色     ☞
 * @desc 自定义血量文本颜色
 * 默认参数: 20
 * @default 20
 *
 * @param Color: HP Gauge 2
 * @text 自定血量文本颜色     ☞
 * @desc 自定义血量文本颜色
 * 默认参数: 21
 * @default 21
 *
 * @param Color: MP Gauge 1
 * @text 自定法值文本颜色     ☞
 * @desc 自定义法值文本颜色
 * 默认参数: 22
 * @default 22
 *
 * @param Color: MP Gauge 2
 * @text 自定法值文本颜色     ☞
 * @desc 自定义法值文本颜色
 * 默认参数: 23
 * @default 23
 *
 * @param Color: MP Cost
 * @text 自定义法值文本色     ☞
 * @desc 自定义法值文本颜色
 * 默认参数: 23
 * @default 23
 *
 * @param Color: Power Up
 * @text 自定义升级文本色     ☞
 * @desc 自定义升级文本颜色
 * 默认参数: 24
 * @default 24
 *
 * @param Color: Power Down
 * @text 自定义升级文本色     ☞
 * @desc 自定义升级文本颜色
 * Default: 25
 * @default 25
 *
 * @param Color: TP Gauge 1
 * @text 自定义怒文本色值     ☞
 * @desc 自定义TP文本颜色值
 * 默认参数: 28
 * @default 28
 *
 * @param Color: TP Gauge 2
 * @text 自定义怒文本色值     ☞
 * @desc 自定义TP文本颜色值
 * 默认参数: 29
 * @default 29
 *
 * @param Color: TP Cost Color
 * @text 自定义怒文本色值     ☞
 * @desc 自定义TP文本颜色值
 * 默认参数: 29
 * @default 29
 *
 * @param ▁▂▃▄▄ 补充规则区 ▄▄▃▂▁
 * @default
 *
 * @param 
 * @text   ◀请具体查看帮助说明
 * @desc 可免费用于商业RPG Maker游戏。在插件感谢名单中加上作者：Yanfly和汉化作者 
 * @default
 *
 * @help
 *
 *
 * ============================================================================
 * ▁▂▃▄▅▅ 云汉版✿YEP动作序列✔A组核心 ▅▅▄▃▂▁（*゜Д゜）σ凸←自爆按钮
 * ============================================================================
 * ▶插件合集：Yanfly引擎库                        ▶插件名称：YEP核心
 * ▶插件作者：Yanfly Engine Plugins                ▶汉化作者：硕明云书
 * ▶插件来源：http://www.yanfly.moe                ▶插件类型：RPG回合制
 * ▶插件教程：https://space.bilibili.com/164546413 ▶插件分组：A组核心件
 * ============================================================================
 * ▁▂▃▄▅▅ 插件简介 ▅▅▄▃▂▁(๑⁼̴̀д⁼̴́๑)What are you 弄啥嘞！
 * ---------------------------------------------------------------------------- 
 *     插件由Yanfly大佬制作，硕明云书亲情汉化修正，适合萌新大佬实现游戏
 * 制作，此插件为Yanfly引擎，是一个为PRG Maker MV制作的插件库，可以在这
 * 里找到很多关于RPG Maker MV的东西，这个引擎插件的核心就是致力于处理游
 * 戏项目核心方面。提高游戏状态的限制到改变你窗口的颜色。同时通过这个插
 * 件修复一些软件上的错误。
 *     Yanfly引擎插件的核心对于插件库来说不是必须的，这个插件的功能主要
 * 是修复错误和允许用户对于软件特性有更多的控制，例如屏幕显示，字体，窗
 * 口颜色等。
 *     ※此插件为核心基础插件 请把此插件放置到插件顺序的第一位！
 * ============================================================================
 * ▁▂▃▄▅▅ 问题修复 ▅▅▄▃▂▁ ∑(っ°Д°;)っ卧槽，不见了
 * ---------------------------------------------------------------------------- 
 *     这个插件修复了一些在RPG Maker MV中发现的bug。请看以下:
 *    【动画叠加】✔
 *     当一个技能/物品使用全屏同时瞄准多个敌人时
 *     动画，它将叠加多次导致图像系列叠加的效果所扭曲。这个插件修复了这
 * 个问题，在群体中只播放一个动画，而不是所有动画。
 * ---------------------------------------------------------------------------- 
 *    【事件移动速度】✔
 *     事件的移动速度略慢于其应有的速度，由于源代码中的一个小错误。这个
 * 插件修复了这个问题，以适当的速度移动。
 * ---------------------------------------------------------------------------- 
 *    【事件移动队列】✔
 *     如果一个事件通过另一个事件命令移动，改变一个条件将事件设置为改变
 * 到一个不同的页面会导致这个事件的移动路线，在其轨道上停止。这个插件修
 * 复了这个问题。
 * ---------------------------------------------------------------------------- 
 *    【事件碰撞】✔
 *     事件不能移动到其他事件下面。这让某些类型的谜题或事件难以存在。这
 * 插件修复了这个问题，使碰撞检查只适用于事件的“与人物相同”优先级。任何
 * 在上面或下面的事件角色将不再与其他事件发生碰撞。
 * ---------------------------------------------------------------------------- 
 *    【屏幕撕裂】✔
 *     当移动缓慢时，屏幕上的贴图撕裂。虽然它不是在所有系统中，速度较慢
 * 的电脑肯定会显示它。插件将修复这个问题，并同步瓷砖，以跟上步伐，使屏
 * 幕上的摄像头移动正常。
 * ---------------------------------------------------------------------------- 
 *    【战斗失真】✔
 *     由于JavaScript奇怪的问题导致，有时使用小数点会导致精表看起来扭曲。
 * 插件将摆脱小数位，并有精灵表拿出仅使用整型值显示正确帧数。
 * ============================================================================
 * ▁▂▃▄▅▅ 金钱相关 ▅▅▄▃▂▁ (*╹▽╹*)土豪我们做朋友好不好
 * ---------------------------------------------------------------------------- 
 *     可以使用这个插件命令来改变游戏内金钱的上限。你也可以改变
 * 其他项目的限制，例如物品，武器，装备等。 
 *     Plugin Command:
 *     GainGold 1234567890       # 队伍获得1234567890金钱.
 *     LoseGold 9876543210       # 队伍丢失9876543210金钱.
 * ----------------------------------------------------------------------------
 *    【物品，武器，装备标签】
 *     <Price: x>
 *     可以改变物品的价格，这个标签允许你超过编辑器999，999的限制。
 * ---------------------------------------------------------------------------- 
 *    【敌方备注】
 *     <Gold: x>
 *     可以改变消灭敌人掉落的奖励，这个标签允许你超过编辑器999，999的限制。
 * ============================================================================
 * ▁▂▃▄▅▅ 物品相关 ▅▅▄▃▂▁  _(:ι」∠)_好饿，但是不想动
 * ---------------------------------------------------------------------------- 
 *     可以改变一个玩家可以携带物品的最大数量。如果你希望每个物品有不同的
 * 最大值，你可以使用下面的标签。
 * ---------------------------------------------------------------------------- 
 *    【物品，武器，装备标签】
 *     <Max Item: x>
 *     这个可以改变物品的最大数量x.
 * ============================================================================
 * ▁▂▃▄▅▅ 数据相关 ▅▅▄▃▂▁  ๑乛◡乛๑卡在了奇怪的地方
 * ---------------------------------------------------------------------------- 
 *     可以对编辑器默认的限制进行更改。为了解除限制，可以使用下面的标签来
 * 获得对参数的更高控制权。
 * ---------------------------------------------------------------------------- 
 *    【角色标签】
 *     <Initial Level: x>
 *     改变角色的初始等级。这可以让你突破99级的限制。
 * ---------------------------------------------------------------------------- 
 *     <Max Level: x>
 *     改变角色的最大等级。这可以让你突破99级的限制。
 * ---------------------------------------------------------------------------- 
 *    【技能学习标签】
 *     <Learn at Level: x>
 *     当这个标签被放入技能标签栏的时候，你可以让玩家在相应等级习得此技能x.
 * ---------------------------------------------------------------------------- 
 *    【武器和装备标签】
 *     <stat: +x>
 *     <stat: -x>
 *     这可以让武器或者装备能够失去或者获得某些状态。例如你可以替换stat
 * 状态为hp血量，mp蓝量，atk攻击，def防御，mat魔攻，mdf魔防，agi速度，luk
 * 幸运等这将允许装备属性超过编辑器的默认值，只要符合最大允许范围。
 * ---------------------------------------------------------------------------- 
 *    【敌方标签】
 *     <stat: x>
 *     这将改变敌方的状态。例如你可以替换stat状态为hp血量，mp蓝量，atk攻击，
 * def防御，mat魔攻，mdf魔防，agi速度，luk幸运等。这将允许装备属性超过编辑
 * 器的默认值，只要符合最大允许范围。
 *     <exp: x>
 *     这将改变消灭敌方的经验值。它允许玩家得打超过编辑器默认9，999，999
 * 的更高经验值。
 * ============================================================================
 * ▁▂▃▄▅▅ 脚本安全 ▅▅▄▃▂▁ (*▼ｰ(｡-_-｡)画风不对，如何相爱
 * ---------------------------------------------------------------------------- 
 *     不规则代码在损害公式、脚本调用、条件分支和可变事件将不再崩溃游戏。
 * 相反它们会强行打开控制台窗口只在测试期间显示错误。
 *     如果玩家不在测试阶段，游戏将照常进行显示的错误。如果游戏是在浏览
 * 器中玩，打开控制台窗口仍然会显示错误。
 * ============================================================================
 * ▁▂▃▄▅▅ 更新日志 ▅▅▄▃▂▁ (((っ•ω•)っ Σ(σ｀•ω•´)σ 起飞！
 * ---------------------------------------------------------------------------- 
 *    【1.23版本】
 *     RPG Maker MV 1.3.2及以上版本，'Scale battleback '插件参数现在会
 * 以不同的格式重新创建battleback精灵。这是因为《battleback》的贴图精灵
 * 缩放太不稳定了。Battleback精灵现在只是常规精灵而不是平铺精灵。这可能
 * 导致插件与其他插件不兼容，为RPG Maker MV版本1.3.4,Game_Actor。meets
 * UsableItemConditions是现在更新，返回检查回原来的Game_BattlerBase版本，
 * 保持与其他插件的兼容性。
 * ---------------------------------------------------------------------------- 
 *    【1.22版本】
 *     增加了“显示事件转换”插件参数。启用这一功能将使事件在地图上不再隐
 * 藏自己，而进入战斗期间过渡。 增加了“显示事件快照”插件参数。启用它将保
 * 持进入战斗时，事件会显示在战斗快照中。不规则代码损害公式，脚本调用，条
 * 件分支，和可变事件将不再崩溃的游戏。相反，它会强行打开控制台窗口只在测
 * 试期间显示错误。
 * ============================================================================ 
 *              \     /
 *              \\   //
 *               )\-/(
 *               /e e\               关注哔哩哔哩“硕明云书”学习不迷路！
 *              ( =T= )        云书主页：https://space.bilibili.com/164546413  
 *              /`---'\               
 *         ____/ /___\ \                     云书QQ:1248659626
 *    \   /   '''     ```~~"--.,_                制作Q群:814443036
 * `-._\ /                       `~~"--.,_       
 *------>|                                `~~"--.,_
 * _.-'/ \                            ___,,,---""~~``'
 *    /   \____,,,,....----""""~~~~````
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CoreEngine');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.ScreenWidth  = Number(Yanfly.Parameters['Screen Width'] || 816);
Yanfly.Param.ScreenHeight = Number(Yanfly.Parameters['Screen Height'] || 624);
Yanfly.Param.ScaleBattleback = String(Yanfly.Parameters['Scale Battlebacks']);
Yanfly.Param.ScaleBattleback = eval(Yanfly.Param.ScaleBattleback);
Yanfly.Param.ScaleTitle = String(Yanfly.Parameters['Scale Title']);
Yanfly.Param.ScaleGameOver = String(Yanfly.Parameters['Scale Game Over']);
Yanfly.Param.OpenConsole = String(Yanfly.Parameters['Open Console']);
Yanfly.Param.OpenConsole = eval(Yanfly.Param.OpenConsole);
Yanfly.Param.ReposBattlers = String(Yanfly.Parameters['Reposition Battlers']);
Yanfly.Param.ReposBattlers = eval(Yanfly.Param.ReposBattlers);
Yanfly.Param.GameFontTimer = Number(Yanfly.Parameters['GameFont Load Timer']);
Yanfly.Param.UpdateRealScale = String(Yanfly.Parameters['Update Real Scale']);
Yanfly.Param.UpdateRealScale = eval(Yanfly.Param.UpdateRealScale);
Yanfly.Param.CollectionClear = String(Yanfly.Parameters['Collection Clear']);
Yanfly.Param.CollectionClear = eval(Yanfly.Param.CollectionClear);

Yanfly.Param.MaxGold = String(Yanfly.Parameters['Gold Max']);
Yanfly.Param.GoldFontSize = Number(Yanfly.Parameters['Gold Font Size']);
Yanfly.Icon.Gold = Number(Yanfly.Parameters['Gold Icon']);
Yanfly.Param.GoldOverlap = String(Yanfly.Parameters['Gold Overlap']);

Yanfly.Param.MaxItem = Number(Yanfly.Parameters['Default Max']);
Yanfly.Param.ItemQuantitySize = Number(Yanfly.Parameters['Quantity Text Size']);

Yanfly.Param.MaxLevel = Number(Yanfly.Parameters['Max Level']);
Yanfly.Param.EnemyMaxHp = Number(Yanfly.Parameters['Enemy MaxHP']);
Yanfly.Param.EnemyMaxMp = Number(Yanfly.Parameters['Enemy MaxMP']);
Yanfly.Param.EnemyParam = Number(Yanfly.Parameters['Enemy Parameter']);
Yanfly.Param.ActorMaxHp = Number(Yanfly.Parameters['Actor MaxHP']);
Yanfly.Param.ActorMaxMp = Number(Yanfly.Parameters['Actor MaxMP']);
Yanfly.Param.ActorParam = Number(Yanfly.Parameters['Actor Parameter']);

Yanfly.Param.AnimationRate = Number(Yanfly.Parameters['Animation Rate']);
Yanfly.Param.FlashTarget = eval(String(Yanfly.Parameters['Flash Target']));
Yanfly.Param.ShowEvTrans = String(Yanfly.Parameters['Show Events Transition']);
Yanfly.Param.ShowEvTrans = eval(Yanfly.Param.ShowEvTrans);
Yanfly.Param.ShowEvSnap = String(Yanfly.Parameters['Show Events Snapshot']);
Yanfly.Param.ShowEvSnap = eval(Yanfly.Param.ShowEvSnap);

Yanfly.Param.ChineseFont = String(Yanfly.Parameters['Chinese Font']);
Yanfly.Param.KoreanFont = String(Yanfly.Parameters['Korean Font']);
Yanfly.Param.DefaultFont = String(Yanfly.Parameters['Default Font']);
Yanfly.Param.FontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.TextAlign = String(Yanfly.Parameters['Text Align']);

Yanfly.Param.DigitGroup = String(Yanfly.Parameters['Digit Grouping']);
Yanfly.Param.LineHeight = Number(Yanfly.Parameters['Line Height']);
Yanfly.Param.IconWidth = Number(Yanfly.Parameters['Icon Width'] || 32);;
Yanfly.Param.IconHeight = Number(Yanfly.Parameters['Icon Height'] || 32);;
Yanfly.Param.FaceWidth = Number(Yanfly.Parameters['Face Width'] || 144);
Yanfly.Param.FaceHeight = Number(Yanfly.Parameters['Face Height'] || 144);
Yanfly.Param.WindowPadding = Number(Yanfly.Parameters['Window Padding']);
Yanfly.Param.TextPadding = Number(Yanfly.Parameters['Text Padding']);
Yanfly.Param.WindowOpacity = Number(Yanfly.Parameters['Window Opacity']);
Yanfly.Param.GaugeOutline = String(Yanfly.Parameters['Gauge Outline']);
Yanfly.Param.GaugeHeight = Number(Yanfly.Parameters['Gauge Height']);
Yanfly.Param.MenuTpGauge = String(Yanfly.Parameters['Menu TP Bar']);

Yanfly.Param.ColorNormal = Number(Yanfly.Parameters['Color: Normal']);
Yanfly.Param.ColorSystem = Number(Yanfly.Parameters['Color: System']);
Yanfly.Param.ColorCrisis = Number(Yanfly.Parameters['Color: Crisis']);
Yanfly.Param.ColorDeath = Number(Yanfly.Parameters['Color: Death']);
Yanfly.Param.ColorGaugeBack = Number(Yanfly.Parameters['Color: Gauge Back']);
Yanfly.Param.ColorHpGauge1 = Number(Yanfly.Parameters['Color: HP Gauge 1']);
Yanfly.Param.ColorHpGauge2 = Number(Yanfly.Parameters['Color: HP Gauge 2']);
Yanfly.Param.ColorMpGauge1 = Number(Yanfly.Parameters['Color: MP Gauge 1']);
Yanfly.Param.ColorMpGauge2 = Number(Yanfly.Parameters['Color: MP Gauge 2']);
Yanfly.Param.ColorMpCost = Number(Yanfly.Parameters['Color: MP Cost']);
Yanfly.Param.ColorPowerUp = Number(Yanfly.Parameters['Color: Power Up']);
Yanfly.Param.ColorPowerDown = Number(Yanfly.Parameters['Color: Power Down']);
Yanfly.Param.ColorTpGauge1 = Number(Yanfly.Parameters['Color: TP Gauge 1']);
Yanfly.Param.ColorTpGauge2 = Number(Yanfly.Parameters['Color: TP Gauge 2']);
Yanfly.Param.ColorTpCost = Number(Yanfly.Parameters['Color: TP Cost Color']);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Core.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
  Yanfly.Core.Bitmap_initialize.call(this, width, height);
  this.fontFace = Yanfly.Param.DefaultFont;
};

Yanfly.Core.Bitmap_blt = Bitmap.prototype.blt;
Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    sw = Math.floor(sw);
    sh = Math.floor(sh);
    dx = Math.floor(dx);
    dy = Math.floor(dy);
    dw = Math.floor(dw);
    dh = Math.floor(dh);
    Yanfly.Core.Bitmap_blt.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
};

Yanfly.Core.Bitmap_fillRect = Bitmap.prototype.fillRect;
Bitmap.prototype.fillRect = function(x, y, w, h, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    w = Math.floor(w);
    h = Math.floor(h);
    Yanfly.Core.Bitmap_fillRect.call(this, x, y, w, h, c);
};

Yanfly.Core.Bitmap_gradientFillRect = Bitmap.prototype.gradientFillRect;
Bitmap.prototype.gradientFillRect = function(x, y, w, h, c1, c2, ve) {
    Yanfly.Core.Bitmap_gradientFillRect.call(this, x, y, w, h, c1, c2, ve);
};

Yanfly.Core.Bitmap_drawCircle = Bitmap.prototype.drawCircle;
Bitmap.prototype.drawCircle = function(x, y, r, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    Yanfly.Core.Bitmap_drawCircle.call(this, x, y, r, c);
};

Yanfly.Core.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, mW, l, align) {
    x = Math.floor(x);
    y = Math.floor(y);
    mW = Math.floor(mW);
    l = Math.floor(l);
    Yanfly.Core.Bitmap_drawText.call(this, text, x, y, mW, l, align);
};

//=============================================================================
// Graphics
//=============================================================================

if (Yanfly.Param.UpdateRealScale) {

Graphics._updateRealScale = function() {
  if (this._stretchEnabled) {
    var h = window.innerWidth / this._width;
    var v = window.innerHeight / this._height;
    this._realScale = Math.min(h, v);
    if (this._realScale >= 3) this._realScale = 3;
    else if (this._realScale >= 2) this._realScale = 2;
    else if (this._realScale >= 1.5) this._realScale = 1.5;
    else if (this._realScale >= 1) this._realScale = 1;
    else this._realScale = 0.5;
  } else {
    this._realScale = this._scale;
  }
};

}; // Yanfly.Param.UpdateRealScale

//=============================================================================
// Sprite
//=============================================================================

Yanfly.Core.Sprite_updateTransform = Sprite.prototype.updateTransform;
Sprite.prototype.updateTransform = function() {
  Yanfly.Core.Sprite_updateTransform.call(this);
  this.worldTransform.tx = Math.floor(this.worldTransform.tx);
  this.worldTransform.ty = Math.floor(this.worldTransform.ty);
};

//=============================================================================
// ScreenSprite
//=============================================================================

Yanfly.Core.ScreenSprite_initialize = ScreenSprite.prototype.initialize;
ScreenSprite.prototype.initialize = function() {
  Yanfly.Core.ScreenSprite_initialize.call(this);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0') return;
  this.scale.x = Graphics.boxWidth * 10;
  this.scale.y = Graphics.boxHeight * 10;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.x = 0;
  this.y = 0;
};

//=============================================================================
// Window
//=============================================================================

Yanfly.Core.Window_refreshAllParts = Window.prototype._refreshAllParts;
Window.prototype._refreshAllParts = function() {
  this._roundWhUp();
  Yanfly.Core.Window_refreshAllParts.call(this);
};

Window.prototype._roundWhUp = function() {
  this._width = Math.ceil(this._width);
  this._height = Math.ceil(this._height);
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_CoreEngine) {
    this.processCORENotetags1($dataItems);
    this.processCORENotetags1($dataWeapons);
    this.processCORENotetags1($dataArmors);
    this.processCORENotetags2($dataEnemies);
    this.processCORENotetags3($dataActors);
    this.processCORENotetags4($dataClasses);
    Yanfly._loaded_YEP_CoreEngine = true;
  }
  return true;
};

DataManager.processCORENotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxItem = Yanfly.Param.MaxItem;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
        obj.price = parseInt(RegExp.$1);
      } else if (line.match(/<(?:MAX ITEM):[ ](\d+)>/i)) {
        obj.maxItem = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(.*):[ ]([\+\-]\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
            obj.params[2] = value;
            break;
          case 'DEF':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT' || 'SPI':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
            obj.params[6] = value;
            break;
          case 'LUK':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:GOLD):[ ](\d+)>/i)) {
        obj.gold = parseInt(RegExp.$1);
      } else if (line.match(/<(.*):[ ](\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
            obj.params[2] = value;
            break;
          case 'DEF':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT':
          case 'SPI':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
            obj.params[6] = value;
            break;
          case 'LUK':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxLevel = Yanfly.Param.MaxLevel;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:MAX LEVEL):[ ](\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
        if (obj.maxLevel < 1) obj.maxLevel = 1;
      } else if (line.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)) {
        obj.initialLevel = parseInt(RegExp.$1);
        if (obj.initialLevel < 1) obj.initialLevel = 1;
      }
    }
  }
};

DataManager.processCORENotetags4 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.learnings.forEach(function(learning) {
      if (learning.note.match(/<(?:LEARN LEVEL|LEARN AT LEVEL):[ ](\d+)>/i)) {
        learning.level = parseInt(RegExp.$1);
        if (learning.level < 1) obj.maxLevel = 1;
      }
    }, this);
  }
};

//=============================================================================
// SceneManager
//=============================================================================

SceneManager._screenWidth  = Yanfly.Param.ScreenWidth;
SceneManager._screenHeight = Yanfly.Param.ScreenHeight;
SceneManager._boxWidth     = Yanfly.Param.ScreenWidth;
SceneManager._boxHeight    = Yanfly.Param.ScreenHeight

Yanfly.Core.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
  Yanfly.Core.SceneManager_run.call(this, sceneClass);
  if (!Utils.isNwjs()) return;
  Yanfly.updateResolution();
  if (Yanfly.Param.OpenConsole) Yanfly.openConsole();
};

Yanfly.updateResolution = function() {
  var resizeWidth = Yanfly.Param.ScreenWidth - window.innerWidth;
  var resizeHeight = Yanfly.Param.ScreenHeight - window.innerHeight;
  if (!Imported.ScreenResolution) {
    window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
    window.resizeBy(resizeWidth, resizeHeight);
  }
};

Yanfly.openConsole = function() {
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var _debugWindow = require('nw.gui').Window.get().showDevTools();
    _debugWindow.moveTo(0, 0);
    window.focus();
  }
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Core.BattleManager_displayStartMessages =
    BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
  Yanfly.Core.BattleManager_displayStartMessages.call(this);
  $gameTroop.members().forEach(function(enemy) {
      enemy.recoverAll();
  });
};

BattleManager.processEscape = function() {
  $gameParty.performEscape();
  SoundManager.playEscape();
  var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
  if (success) {
      $gameParty.removeBattleStates();
      this.displayEscapeSuccessMessage();
      this._escaped = true;
      this.processAbort();
  } else {
      this.displayEscapeFailureMessage();
      this._escapeRatio += 0.1;
      $gameParty.clearActions();
      this.startTurn();
  }
  return success;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return Yanfly.Param.EnemyMaxHp;
    } else if (paramId === 1) {
        return Yanfly.Param.EnemyMaxMp;
    } else {
        return Yanfly.Param.EnemyParam;
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Core.Game_Actor_isMaxLevel = Game_Actor.prototype.isMaxLevel;
Game_Actor.prototype.isMaxLevel = function() {
    if (this.maxLevel() === 0) return false;
    return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
};

Game_Actor.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
      return Yanfly.Param.ActorMaxHp;
  } else if (paramId === 1) {
      return Yanfly.Param.ActorMaxMp;
  } else {
      return Yanfly.Param.ActorParam;
  }
};

Yanfly.Core.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    if (this.level > 99) {
      var i = this.currentClass().params[paramId][99];
      var j = this.currentClass().params[paramId][98];
      i += (i - j) * (this.level - 99);
      return i;
    }
    return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
};

Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this._exp[this._classId];
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

Game_Actor.prototype.learnSkill = function(skillId) {
    if (!this._skills.contains(skillId)) {
        this._skills.push(skillId);
        this._skills.sort(function(a, b) {
            return a - b;
        });
    }
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') {

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
  if($gameParty.inBattle() && !BattleManager.canEscape() &&
  this.testEscape(item)){
    return false;
  }
  return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4'

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.maxGold = function() {
    return eval(Yanfly.Param.MaxGold);
};

Game_Party.prototype.maxItems = function(item) {
    if (!item) return 1;
    return item.maxItem;
};

Game_Party.prototype.onPlayerWalk = function() {
    var group = this.members();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var actor = group[i];
      if (actor) actor.onPlayerWalk();
    }
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.displayX = function() {
    return parseFloat(Math.floor(this._displayX *
      this.tileWidth())) / this.tileWidth();
};

Game_Map.prototype.displayY = function() {
    return parseFloat(Math.floor(this._displayY *
      this.tileHeight())) / this.tileHeight();
};

Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
        return x - this.displayX() + $dataMap.width;
    } else {
        return x - this.displayX();
    }
};

Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
        return y - this.displayY() + $dataMap.height;
    } else {
        return y - this.displayY();
    }
};

Game_Map.prototype.updateEvents = function() {
    var group = this.events();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
    var group = this._commonEvents;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
};

Game_Map.prototype.updateVehicles = function() {
    var group = this._vehicles;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var vehicle = group[i];
      if (vehicle) vehicle.update();
    }
};

//=============================================================================
// Game_Character
//=============================================================================

Game_Character.prototype.queueMoveRoute = function(moveRoute) {
    this._originalMoveRoute = moveRoute;
    this._originalMoveRouteIndex = 0;
};

Yanfly.Core.Game_Event_setMoveRoute =
    Game_Event.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    if (!this._moveRouteForcing) {
        Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
    } else {
        this.queueMoveRoute(moveRoute);
    }
};

Yanfly.Core.Game_Character_processMoveCommand =
  Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function(command) {
  var gc = Game_Character;
  var params = command.parameters;
  switch (command.code) {
  case gc.ROUTE_SCRIPT:
    try {
      eval(params[0]);
    } catch (e) {
      Yanfly.Util.displayError(e, params[0], 'MOVE ROUTE SCRIPT ERROR');
    }
    return;
    break;
  }
  return Yanfly.Core.Game_Character_processMoveCommand.call(this, command);
};

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.isCollidedWithEvents = function(x, y) {
  var events = $gameMap.eventsXyNt(x, y).filter(function(ev) {
    return ev.isNormalPriority();
  });
  if (events.length <= 0) return false;
  return this.isNormalPriority();
};

//=============================================================================
// Game_Screen
//=============================================================================

Game_Screen.prototype.updatePictures = function() {
    var group = this._pictures;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var picture = group[i];
      if (picture) picture.update();
    }
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.Core.Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_LEARN_SKILL:
      return target.isActor() && !target._skills.contains(effect.dataId);
    default:
      return Yanfly.Core.Game_Action_testItemEffect.call(this, target, effect);
    }
};

Game_Action.prototype.evalDamageFormula = function(target) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var v = $gameVariables._data;
  var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
  try {
    var value = Math.max(eval(item.damage.formula), 0) * sign;
    if (isNaN(value)) value = 0;
    return value;
  } catch (e) {
    Yanfly.Util.displayError(e, item.damage.formula, 'DAMAGE FORMULA ERROR');
    return 0;
  }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

// Conditional Branch
Yanfly.Core.Game_Interpreter_command111 =
  Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function() {
  var result = false;
  switch (this._params[0]) {
  case 12:  // Script
    var code = this._params[1];
    try {
      result = !!eval(code);
    } catch (e) {
      result = false;
      Yanfly.Util.displayError(e, code, 'CONDITIONAL BRANCH SCRIPT ERROR');
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  }
  return Yanfly.Core.Game_Interpreter_command111.call(this);
};

// Control Variables
Yanfly.Core.Game_Interpreter_command122 =
  Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function() {
  switch (this._params[3]) {
  case 4:  // Script
    var value = 0;
    var code = this._params[4];
    try {
      value = eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CONTROL VARIABLE SCRIPT ERROR');
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
      this.operateVariable(i, this._params[2], value);
    }
    return true;
    break;
  }
  return Yanfly.Core.Game_Interpreter_command122.call(this);
};

// Script
Game_Interpreter.prototype.command355 = function() {
  var script = this.currentCommand().parameters[0] + '\n';
  while (this.nextEventCode() === 655) {
    this._index++;
    script += this.currentCommand().parameters[0] + '\n';
  }
  try {
    eval(script);
  } catch (e) {
    Yanfly.Util.displayError(e, script, 'SCRIPT CALL ERROR');
  }
  return true;
};

Yanfly.Core.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Core.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'GainGold') {
        $gameParty.gainGold(parseInt(args[0]));
    }
    if (command === 'LoseGold') {
        $gameParty.loseGold(parseInt(args[0]));
    }
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.clearChildren = function() {
  while (this.children.length > 0) {
    this.removeChild(this.children[0]);
  }
};

if (Yanfly.Param.CollectionClear) {

Yanfly.Core.Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
  Yanfly.Core.Scene_Base_terminate.call(this);
  if (this._bypassFirstClear) return;
  this.clearChildren();
};

Yanfly.Core.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Title_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Map_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Battle_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Options_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Load_terminate = Scene_Load.prototype.terminate;
Scene_Load.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Load_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Gameover_terminate = Scene_Gameover.prototype.terminate;
Scene_Gameover.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Gameover_terminate.call(this);
  this.clearChildren();
};

}; // Yanfly.Param.CollectionClear

//=============================================================================
// Scene_Boot
//=============================================================================

Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else if (Yanfly.Param.GameFontTimer <= 0) {
    return false;
  } else {
    var elapsed = Date.now() - this._startDate;
    if (elapsed >= Yanfly.Param.GameFontTimer) {
      throw new Error('Failed to load GameFont');
    } else {
      return false;
    }
  }
};

//=============================================================================
// Scene_Title
//=============================================================================

Yanfly.Core.Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
  Yanfly.Core.Scene_Title_start.call(this);
  if (eval(Yanfly.Param.ScaleTitle)) this.rescaleTitle();
};

Scene_Title.prototype.rescaleTitle = function() {
  this.rescaleTitleSprite(this._backSprite1);
  this.rescaleTitleSprite(this._backSprite2);
};

Scene_Title.prototype.rescaleTitleSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Scene_Map
//=============================================================================

if (Yanfly.Param.ShowEvTrans) {

Scene_Map.prototype.startEncounterEffect = function() {
  this._encounterEffectDuration = this.encounterEffectSpeed();
};

}; // Yanfly.Param.ShowEvTrans

Yanfly.Core.Scene_Map_snapForBattleBackground =
  Scene_Map.prototype.snapForBattleBackground;
Scene_Map.prototype.snapForBattleBackground = function() {
  if (!Yanfly.Param.ShowEvSnap) this._spriteset.hideCharacters();
  Yanfly.Core.Scene_Map_snapForBattleBackground.call(this);
  if (Yanfly.Param.ShowEvTrans) this._spriteset.showCharacters();
};

//=============================================================================
// Scene_Gameover
//=============================================================================

Yanfly.Core.Scene_Gameover_start = Scene_Gameover.prototype.start;
Scene_Gameover.prototype.start = function() {
    Yanfly.Core.Scene_Gameover_start.call(this);
    if (eval(Yanfly.Param.ScaleGameOver)) this.rescaleBackground();
};

Scene_Gameover.prototype.rescaleBackground = function() {
    this.rescaleImageSprite(this._backSprite);
};

Scene_Gameover.prototype.rescaleImageSprite = function(sprite) {
    if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var ratioX = width / sprite.bitmap.width;
    var ratioY = height / sprite.bitmap.height;
    if (ratioX > 1.0) sprite.scale.x = ratioX;
    if (ratioY > 1.0) sprite.scale.y = ratioY;
    this.centerSprite(sprite);
};

Scene_Gameover.prototype.centerSprite = function(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
};

//=============================================================================
// Sprite_Animation
//=============================================================================

Sprite_Animation.prototype.setupRate = function() {
  this._rate = Yanfly.Param.AnimationRate;
};

//=============================================================================
// Sprite_Battler
//=============================================================================

if (!Yanfly.Param.FlashTarget) {

Yanfly.Core.Sprite_Battler_updateSelectionEffect =
    Sprite_Battler.prototype.updateSelectionEffect;
Sprite_Battler.prototype.updateSelectionEffect = function() {
    if (this._battler.isActor()) {
      Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this);
    } else {
      if (this._battler.isSelected()) this.startEffect('whiten');
    }
};

}; // Yanfly.Param.FlashTarget

//=============================================================================
// Sprite_Actor
//=============================================================================

if (Yanfly.Param.ReposBattlers) {
  Yanfly.Core.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
  Sprite_Actor.prototype.setActorHome = function(index) {
      Yanfly.Core.Sprite_Actor_setActorHome.call(this, index);
      this._homeX += Graphics.boxWidth - 816;
      this._homeY += Graphics.boxHeight - 624;
  };
};

Sprite_Actor.prototype.retreat = function() {
    this.startMove(1200, 0, 120);
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

if (Yanfly.Param.ReposBattlers) {

Yanfly.Core.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    Yanfly.Core.Sprite_Enemy_setBattler.call(this, battler);
    if (!this._enemy._alteredScreenY) {
      this._homeY += Graphics.boxHeight - 624;
      this._enemy._screenY = this._homeY;
      this._enemy._alteredScreenY = true;
    }
    if ($gameSystem.isSideView()) return;
    if (!this._enemy._alteredScreenX) {
      this._homeX += (Graphics.boxWidth - 816) / 2;
      this._enemy._screenX = this._homeX;
      this._enemy._alteredScreenX = true;
    }
};

}; // Yanfly.Param.ReposBattlers

//=============================================================================
// Sprite_StateIcon
//=============================================================================

Sprite_StateIcon._iconWidth  = Yanfly.Param.IconWidth;
Sprite_StateIcon._iconHeight = Yanfly.Param.IconHeight;

//=============================================================================
// Sprite_Button
//=============================================================================

Sprite_Button.prototype.isButtonTouched = function() {
    var x = this.canvasToLocalX(TouchInput.x) + (this.anchor.x * this.width);
    var y = this.canvasToLocalY(TouchInput.y) + (this.anchor.y * this.height);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

//=============================================================================
// Sprite_Battleback
//=============================================================================

function Sprite_Battleback() {
    this.initialize.apply(this, arguments);
}

Sprite_Battleback.prototype = Object.create(Sprite.prototype);
Sprite_Battleback.prototype.constructor = Sprite_Battleback;

Sprite_Battleback.prototype.initialize = function(bitmapName, type) {
  Sprite.prototype.initialize.call(this);
  this._bitmapName = bitmapName;
  this._battlebackType = type;
  this.createBitmap();
};

Sprite_Battleback.prototype.createBitmap = function() {
  if (this._bitmapName === '') {
    this.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
  } else {
    if (this._battlebackType === 1) {
      this.bitmap = ImageManager.loadBattleback1(this._bitmapName);
    } else {
      this.bitmap = ImageManager.loadBattleback2(this._bitmapName);
    }
    this.scaleSprite();
  }
};

Sprite_Battleback.prototype.scaleSprite = function() {
  if (this.bitmap.width <= 0) return setTimeout(this.scaleSprite.bind(this), 5);
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  if (this.bitmap.width < width) {
    this.scale.x = width / this.bitmap.width;
  }
  if (this.bitmap.height < height) {
    this.scale.y = height / this.bitmap.height;
  }
  this.anchor.x = 0.5;
  this.x = Graphics.boxWidth / 2;
  if ($gameSystem.isSideView()) {
    this.anchor.y = 1;
    this.y = Graphics.boxHeight;
  } else {
    this.anchor.y = 0.5;
    this.y = Graphics.boxHeight / 2;
  }
};

//=============================================================================
// Spriteset_Map
//=============================================================================

Spriteset_Map.prototype.hideCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.hide();
  }
};

Spriteset_Map.prototype.showCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.show();
  }
};

//=============================================================================
// Spriteset_Battle
//=============================================================================

if (Yanfly.Param.ScaleBattleback) {

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.2') {

// Rewriting the battlebacks
Spriteset_Battle.prototype.createBattleback = function() {
  this._back1Sprite = new Sprite_Battleback(this.battleback1Name(), 1);
  this._back2Sprite = new Sprite_Battleback(this.battleback2Name(), 2);
  this._battleField.addChild(this._back1Sprite);
  this._battleField.addChild(this._back2Sprite);
};

// No more updateBattleback
Spriteset_Battle.prototype.updateBattleback = function() {
};

} else { // Version 1.3.0 and below
  
Yanfly.Core.Spriteset_Battle_locateBattleback =
    Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
  var sprite1 = this._back1Sprite;
  var sprite2 = this._back2Sprite;
  if (sprite1.bitmap.width <= 0) return;
  if (sprite2.bitmap.width <= 0) return;
  if (this._rescaledBattlebackSprite) return;
  this._rescaledBattlebackSprite = true;
  Yanfly.Core.Spriteset_Battle_locateBattleback.call(this);
  var height = this._battleField.height;
  sprite1.origin.y = sprite1.x + sprite1.bitmap.height - height;
  sprite2.origin.y = sprite1.y + sprite2.bitmap.height - height;
  this.rescaleBattlebacks();
};

Spriteset_Battle.prototype.rescaleBattlebacks = function() {
  this.rescaleBattlebackSprite(this._back1Sprite, 'fnord');
  this.rescaleBattlebackSprite(this._back2Sprite, 'blah');
};

Spriteset_Battle.prototype.rescaleBattlebackSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) {
    sprite.scale.x = ratioX;
    sprite.anchor.x = 0.5;
    sprite.x = width / 2;
  }
  if (ratioY > 1.0) {
    sprite.scale.y = ratioY;
    sprite.origin.y = 0;
    sprite.y = 0;
  }
};

} // Version 1.3.0 and below

} // Yanfly.Param.ScaleBattleback

//=============================================================================
// Window_Base
//=============================================================================

Window_Base._iconWidth   = Yanfly.Param.IconWidth;
Window_Base._iconHeight  = Yanfly.Param.IconHeight;
Window_Base._faceWidth   = Yanfly.Param.FaceWidth;
Window_Base._faceHeight  = Yanfly.Param.FaceHeight;

Window_Base.prototype.lineHeight = function() {
  return Yanfly.Param.LineHeight;
};

Window_Base.prototype.drawTextEx = function(text, x, y) {
  if (text) {
    this.resetFontSettings();
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
    return Yanfly.Param.ChineseFont;
    } else if ($gameSystem.isKorean()) {
    return Yanfly.Param.KoreanFont;
    } else {
    return Yanfly.Param.DefaultFont;
    }
};

Window_Base.prototype.standardFontSize = function() {
    return Yanfly.Param.FontSize;
};

Window_Base.prototype.standardPadding = function() {
    return Yanfly.Param.WindowPadding;
};

Window_Base.prototype.textPadding = function() {
    return Yanfly.Param.TextPadding;
};

Window_Base.prototype.standardBackOpacity = function() {
    return Yanfly.Param.WindowOpacity;
};

Window_Base.prototype.normalColor = function() {
  return this.textColor(Yanfly.Param.ColorNormal);
};
Window_Base.prototype.systemColor = function() {
    return this.textColor(Yanfly.Param.ColorSystem);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(Yanfly.Param.ColorCrisis);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(Yanfly.Param.ColorDeath);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(Yanfly.Param.ColorGaugeBack);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge1);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge2);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorMpCost);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerUp);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerDown);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge2);
};

Window_Base.prototype.tpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorTpCost);
};

Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  var color3 = this.gaugeBackColor();
  var fillW = Math.floor(dw * rate).clamp(0, dw);
  var gaugeH = this.gaugeHeight();
  var gaugeY = dy + this.lineHeight() - gaugeH - 2;
  if (eval(Yanfly.Param.GaugeOutline)) {
    color3.paintOpacity = this.translucentOpacity();
    this.contents.fillRect(dx, gaugeY - 1, dw, gaugeH, color3);
    fillW = Math.max(fillW - 2, 0);
    gaugeH -= 2;
    dx += 1;
  } else {
    var fillW = Math.floor(dw * rate);
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
  }
  this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.gaugeHeight = function() {
    return Yanfly.Param.GaugeHeight;
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    var dw1 = this.textWidth(TextManager.levelA);
    this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
    var level = Yanfly.Util.toGroup(actor.level);
    var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth(Yanfly.Util.toGroup(max));
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x3, y, valueWidth,
          'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(Yanfly.Util.toGroup(max), x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x1, y, valueWidth,
          'right');
    }
};

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(Yanfly.Util.toGroup(actor.tp), x + width - 64, y, 64,
      'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var xpad = Window_Base._faceWidth + (2 * Yanfly.Param.TextPadding);
    var x2 = x + xpad;
    var width2 = Math.max(180, width - xpad - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    if (eval(Yanfly.Param.MenuTpGauge)) {
      this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    }
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) {
    this.resetTextColor();
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

Window_Base.prototype.usingGoldIcon = function(unit) {
    if (unit !== TextManager.currencyUnit) return false;
    return Yanfly.Icon.Gold > 0;
};

Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = this.lineHeight();
        var padding = (iconBoxWidth - Window_Base._iconWidth) / 2;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + padding, y + padding);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

//=============================================================================
// Window_Command
//=============================================================================

Window_Command.prototype.itemTextAlign = function() {
    return Yanfly.Param.TextAlign;
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    var fw = Window_Base._faceWidth;
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
    var x = rect.x + xpad;
    if (!eval(Yanfly.Param.MenuTpGauge)) {
      var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    } else {
      var y = rect.y;
    }
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

//=============================================================================
// Window_ItemList
//=============================================================================

Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('\u00d70,000');
};

Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
    var numItems = Yanfly.Util.toGroup($gameParty.numItems(item));
    this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

//=============================================================================
// Window_SkillStatus
//=============================================================================

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        if (!eval(Yanfly.Param.MenuTpGauge)) {
          var y = h / 2 - this.lineHeight() * 1.5;
        } else {
          var y = 0;
        }
        var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
        var width = w - xpad - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, Window_Base._faceWidth, h);
        this.drawActorSimpleStatus(this._actor, xpad, y, width);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillTpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillMpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    }
};

//=============================================================================
// Window_EquipStatus
//=============================================================================

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, 48, 'right');
};

//=============================================================================
// Window_SkillType
//=============================================================================

Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

//=============================================================================
// Window_ActorCommand
//=============================================================================

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b){return a-b});
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

//=============================================================================
// Window_Status
//=============================================================================

Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      var y2 = y + lineHeight * i;
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.param(paramId), x, y2, 160);
      this.resetTextColor();
      var actorParam = Yanfly.Util.toGroup(this._actor.param(paramId));
      var dw = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i + 2)));
      this.drawText(actorParam, x + 160, y2, dw, 'right');
    }
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    } else {
      value1 = Yanfly.Util.toGroup(value1);
      value2 = Yanfly.Util.toGroup(value2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

//=============================================================================
// Window_ShopBuy
//=============================================================================

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    var itemPrice = Yanfly.Util.toGroup(this.price(item));
    this.drawText(itemPrice, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(true);
    this.resetFontSettings();
};

//=============================================================================
// Window_ShopNumber
//=============================================================================

Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    var itemNumber = Yanfly.Util.toGroup(this._number);
    this.drawText(itemNumber, x, y, width, 'right');
};

//=============================================================================
// Window_NameEdit
//=============================================================================

Window_NameEdit.prototype.faceWidth = function() {
    return Window_Base._faceWidth;
};

//=============================================================================
// Window_BattleStatus
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return this.width / 2 + this.standardPadding();
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var minIconArea = Window_Base._iconWidth * 2;
    var nameLength = this.textWidth('0') * 16 + 6;
    var iconWidth = Math.max(rect.width - nameLength, minIconArea);
    var nameWidth = rect.width - iconWidth;
    this.drawActorName(actor, rect.x + 0, rect.y, nameWidth);
    this.drawActorIcons(actor, rect.x + nameWidth, rect.y, iconWidth);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 30;
    var hpW = parseInt(totalArea * 108 / 300);
    var otW = parseInt(totalArea * 96 / 300);
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15, rect.y, otW);
    this.drawActorTp(actor, rect.x + hpW + otW + 30, rect.y, otW);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 15;
    var hpW = parseInt(totalArea * 201 / 315);
    var otW = parseInt(totalArea * 114 / 315);
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15,  rect.y, otW);
};

//=============================================================================
// Window_BattleLog
//=============================================================================

Window_BattleLog.prototype.showNormalAnimation = function(targets,
animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
      if (animation.position === 3) {
        targets.forEach(function(target) {
            target.startAnimation(animationId, mirror, 0);
        });
      } else {
          var delay = this.animationBaseDelay();
          var nextDelay = this.animationNextDelay();
          targets.forEach(function(target) {
              target.startAnimation(animationId, mirror, delay);
              delay += nextDelay;
          });
      }
    }
};

//=============================================================================
// New Function
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal !== 'string') { inVal = String(inVal); }
  if (!eval(Yanfly.Param.DigitGroup)) return inVal;
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
