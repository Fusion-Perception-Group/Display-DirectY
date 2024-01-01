
document.getElementById('connect').addEventListener('click', async () => {
    // 请求串行端口
    const port = await navigator.serial.requestPort();
    // 打开串行端口
    await port.open({ baudRate: 115200 });

    const reader = port.readable.getReader();
    const textDecoder = new TextDecoder();
    let receivedText = "";
    FrameFlag = 0;
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) {
                break;
            }
            const chunk = textDecoder.decode(value);
            receivedText += chunk;
            // console.log(receivedText)
            
            // 检查是否存在分隔符（例如换行符）
            let endIndex = receivedText.indexOf('\n');
            while (endIndex !== -1) {
                // 提取一个完整的数据帧
                const frame = receivedText.substring(0, endIndex);
                receivedText = receivedText.substring(endIndex + 1);

                // 尝试解析JSON
                try {
                    const json = JSON.parse(frame);
                    document.getElementById('data').textContent = JSON.stringify(json, null, 2);
                } catch (e) {
                    // 如果不是有效的JSON，忽略这个数据帧
                    console.log("Invalid JSON: ", frame);
                }

                // 查找下一个分隔符
                endIndex = receivedText.indexOf('\n');
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        reader.releaseLock();
    }
});