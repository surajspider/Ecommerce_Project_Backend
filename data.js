const data = [
    {
        "id": 1,
        "image": "https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg",
        "pname": "Samsung Galaxy M34 5G",
        "brand": "samsung",
        "originalPrice": 24499,
        "offerPrice": 16548,
        "descript1": "16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+ Resolution, 1080 x 2340 Pixels Protected by Corning Gorilla Glass 5",
        "descript2": "50MP+8MP+2MP Triple Camera Setup - True 50MP No Shake Cam (F1.8) Main Camera + 8MP (F2.2) + 2MP (F2.4)| 13MP (F2.0) Front Camera",
        "descript3": "6000mAH Lithium-ion battery, 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories including batteries from the date of purchase",
        "descript4": "4 Generations of OS Upgrades and 5 Years of Security Updates",
        "descript5": "Exynos 1280 Octa Core 2.4GHz with the 12 Band Support for a True 5G Experience"
    },
    {
        "id": 2,
        "image": "https://m.media-amazon.com/images/I/71BiCb7N5YL._SX679_.jpg",
        "pname": "Xiaomi Redmi 10 Power",
        "brand": "redmi",
        "originalPrice": 18999,
        "offerPrice": 9899,
        "descript1": "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        "descript2": "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)",
        "descript3": "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam",
        "descript4": "Android 12,One UI Core 4 with a powerful Octa Core Processor",
        "descript5": "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
    },
    {
        "id": 3,
        "image": "https://m.media-amazon.com/images/I/81PcAHZxgLL._SX569_.jpg",
        "pname": "Samsung Galaxy M13",
        "brand": "samsung",
        "originalPrice": 14999,
        "offerPrice": 9289,
        "descript1": "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        "descript2": "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)",
        "descript3": "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam",
        "descript4": "Android 12,One UI Core 4 with a powerful Octa Core Processor",
        "descript5": "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
    },
    {
        "id": 4,
        "image": "https://m.media-amazon.com/images/I/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.jpg",
        "pname": "realme narzo N53",
        "brand": "realme",
        "originalPrice": 11999,
        "offerPrice": 10999,
        "descript1": "Enjoy smooth multitasking and effortless app switching with the powerful 12GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128GB ROM",
        "descript2": "Experience lightning-fast charging with the 33W SUPERVOOC technology, getting your device ready in no time. Say goodbye to long charging times and stay powered up for longer durations",
        "descript3": "The slim and sleek 7.49mm design adds a touch of elegance to your device, making it comfortable to hold and carry. The feather gold design enhances the visual appeal, giving your phone a premium and luxurious look.",
        "descript4": "Capture stunning, detailed photos with the high-resolution 50MP AI camera, bringing your memories to life.",
        "descript5": "he AI-powered camera technology ensures intelligent scene recognition and enhances your photography skills."
    },
    {
        "id": 5,
        "image": "https://m.media-amazon.com/images/I/41eSQvTbsaL._SX300_SY300_QL70_FMwebp_.jpg",
        "pname": "OnePlus 11 5G",
        "brand": "oneplus",
        "originalPrice": 60000,
        "offerPrice": 58999,
        "descript1": "Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support",
        "descript2": "Operating System: OxygenOS based on Android 13",
        "descript3": "Processor: Snapdragon 8 Gen 2 Mobile Platform",
        "descript4": "8GB LPDDR5X RAM, 128GB UFS3.1 Storage",
        "descript5": "Battery & Charging: 5000 mAh with 100W SUPERVOOC"
    },
    {
        "id": 6,
        "image": "https://m.media-amazon.com/images/I/41LMF7AU30L._SX300_SY300_QL70_FMwebp_.jpg",
        "pname": "iQOO Neo 7 Pro 5G",
        "brand": "iqoo",
        "originalPrice": 39999,
        "offerPrice": 32999,
        "descript1": "Snapdragon 8+ Gen 1 Mobile Platform adopts TSMC 4nm Process & has Superior Flagship Grade Performance with LPDDR5 RAM & UFS 3.1 Storage",
        "descript2": "Independent Gaming Chip boosts FPS by Game Frame Interpolation, sharpens Display with Game Display Enhancement and reduces power consumption",
        "descript3": "Takes only 8 min to charge from 1% to 50% with 120W FlashCharge in Fast Charging Mode (100% in 25 min)",
        "descript4": "Utmost clarity whether it’s Day or Night with Flagship 50MP GN5 OIS Ultra-Sensing coupled with Ultra-Wide (8MP) and Macro Camera",
        "descript5": "Motion Control, Gyroscope Enhancement, 4D Game Vibration, Voice Changer are here to level up your gaming experience"
    },
    {
        "id": 7,
        "image": "https://m.media-amazon.com/images/I/41Vq1rvptWL._SX300_SY300_QL70_FMwebp_.jpg",
        "pname": "iQOO 9 5G",
        "brand": "iqoo",
        "originalPrice": 49990,
        "offerPrice": 42000,
        "descript1": "Qualcomm Snapdragon 888+ 5G Mobile Platform which is a 5nm process technology, the CPU performance is still 5.2% higher while maintaining the same power consumption",
        "descript2": "120W FlashCharge which can charge 50% battery in just 6 minutes and 100% battery in just 18 minutes.",
        "descript3": "Intelligent Display Chip is able to increase the frame rate and optimize colors so that every player can enjoy high FPS and rich colors at hand to be fully immersed in the gaming experience.",
        "descript4": "48MP Gimbal Camera system with Sony IMX598 sensor, 13MP super wide-angle camera can take wide-angle shots at 120° (108° after correction)",
        "descript5": "120Hz 10Bit AMOLED Display lets you enjoy a seamless and smooth screen experience, along with HDR 10+ Standard Certification that supports HDR high dynamic range video content playback."
    },
    {
        "id": 8,
        "image": "https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg",
        "pname": "OnePlus 11R 5G",
        "brand": "oneplus",
        "originalPrice": 40999,
        "offerPrice": 39999,
        "descript1": "Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.",
        "descript2": "Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+",
        "descript3": "Operating System: OxygenOS based on Android 13",
        "descript4": "Processor: Snapdragon 8+ Gen 1 Mobile Platform",
        "descript5": "8GB LPDDR5X RAM, 128GB UFS3.1 STORAGE"
    }
];

module.exports = data;