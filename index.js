const os = require("os");
const {
  RedBackground,
  RedText,
  CyanBackground,
  CyanText,
  BlueBackground,
  BlueText,
  MagentaBackground,
  MagentaText,
  OrangeBackground,
  OrangeText,
  YellowBackground,
  YellowText,
  GreenBackground,
  GreenText,
  BrightGreenBackground,
  BrightGreenText,
  BrightCyanBackground,
  BrightCyanText,
  BrightRedBackground,
  BrightRedText,
  BrightYellowBackground,
  BrightYellowText,
  BrightBlueBackground,
  BrightBlueText,
  BrightMagentaBackground,
  BrightMagentaText,
  RainbowText,
} = require("jbassard97nodecolors");

console.clear();
console.time(RainbowText("\nStats retrieved in"));

console.log(
  BrightRedBackground(" USER INFO: "),
  BrightRedText(os.userInfo().username)
);
console.log(RedBackground(" HOME DIRECTORY: "), RedText(os.userInfo().homedir));
console.log(
  BrightYellowBackground(" HOST NAME: "),
  BrightYellowText(os.hostname())
);
console.log(YellowBackground(" CPU MODEL: "), YellowText(os.cpus()[0].model));
console.log(
  BrightGreenBackground(" # OF CPU CORES: "),
  BrightGreenText(os.cpus().length)
);
console.log(
  GreenBackground(" EACH CPU SPEED: "),
  GreenText(`${os.cpus()[0].speed} MHz`)
);
console.log(BrightCyanBackground(" OS TYPE: "), BrightCyanText(os.type()));
console.log(CyanBackground(" PLATFORM: "), CyanText(os.platform()));
console.log(
  BrightBlueBackground(" CPU ARCHITECTURE: "),
  BrightBlueText(os.arch())
);
console.log(
  BlueBackground(" OS UPTIME: "),
  BlueText(
    `${Math.floor(os.uptime())} Sec / ${Math.floor(
      os.uptime() / 60
    )} Min / ${Math.floor(os.uptime() / 60 / 60)} Hrs`
  )
);
console.log(
  BrightMagentaBackground(" TOTAL MEMORY: "),
  BrightMagentaText(
    `${os.totalmem()} bytes / ${Math.floor(
      os.totalmem() / 1024 / 1024
    )} MB / ${Math.floor(os.totalmem() / 1024 / 1024 / 1024)} GB`
  )
);

const logFreeMemory = () => {
  const freeMemBytes = os.freemem();
  const freeMemMB = Math.floor(freeMemBytes / 1024 / 1024);
  const freeMemGB = Math.floor(freeMemBytes / 1024 / 1024 / 1024);

  console.log(
    MagentaBackground(" FREE MEMORY: "),
    MagentaText(`${freeMemBytes} bytes / ${freeMemMB} MB / ${freeMemGB} GB`)
  );
};

logFreeMemory();

console.timeEnd(RainbowText("\nStats retrieved in"));
