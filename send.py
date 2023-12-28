from simplepyble import SimplePyBle
from simplepyble.advertisement import Advertisement
import time

def main():
    # 创建 SimplePyBle 实例
    ble = SimplePyBle()

    # 定义服务 UUID 和特性 UUID
    service_uuid = "00001101-0000-1000-8000-00805F9B34FB"
    characteristic_uuid = "00002a29-0000-1000-8000-00805f9b34fb"

    # 创建广告数据
    advertisement = Advertisement()
    advertisement.local_name = "MyBLEDevice"
    advertisement.add_service_uuid(service_uuid)

    # 启动广告
    ble.start_advertising(advertisement)

    # 创建服务和特性
    service = ble.add_service(service_uuid)
    characteristic = service.add_characteristic(characteristic_uuid, ["read", "write"])

    # 设置特性的值（这里是要发送的字符串）
    characteristic.value = bytearray("ABCD", "utf-8")

    # 等待一段时间以允许设备连接
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        ble.stop_advertising()
        ble.shutdown()

if __name__ == "__main__":
    main()
