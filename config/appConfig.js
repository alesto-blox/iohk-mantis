const APP_CONF = {
    LINUX:{
        APP_PATH: "/home/marko/IOHK/Mantis-Wallet-0.1.1.AppImage",
        APP_CONF_PATH: "/home/ubuntu/.mantis-wallet/config.json",
        TEST_CONF_PATH:"./test_data/config.json",
    },
    WINDOWS:{
        APP_PATH: "C:\\Users\\aleks\\AppData\\Local\\Programs\\Mantis-Wallet\\Mantis-Wallet.exe",
        APP_CONF_PATH: "C:\\Users\\aleks\\.mantis-wallet\\config.json",
        TEST_CONF_PATH:"C:\\Users\\aleks\\OneDrive\\Desktop\\IOHK\\iohk-mantis\\test_data\\config.json",
    },
    START_TIMEOUT:30000,
    WAIT:30000,
    TEST_DATA:{
        CreateWallet:"./test_data/CreateWalletData.txt",
        WalletName:"TestWallet",
        WalletPass:"TestPass123!"
    }
};
module.exports = APP_CONF