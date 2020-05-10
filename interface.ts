class Car implements Radio{
    switchRadio(){

    }
}
interface Battery{
    //返回number
    checkBatteryStatus():number
}
interface Radio{
    switchRadio():void
}
//把接口合并
//自动继承Radio的switchRadio，再添加checkBatteryStatus
interface RadioWithBatter extends Radio{
    checkBatteryStatus()
}
//多实现
// class CellPhone implements Radio,Battery
class CellPhone implements RadioWithBatter{
    switchRadio(){

    }
    checkBatteryStatus(){
        return 100
    }
}