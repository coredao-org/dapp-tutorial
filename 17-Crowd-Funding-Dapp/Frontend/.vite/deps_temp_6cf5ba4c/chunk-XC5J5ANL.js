// node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js
function isEcosystemWallet(wallet) {
  return typeof wallet === "string" ? wallet.startsWith("ecosystem.") : wallet.id.startsWith("ecosystem.");
}

// node_modules/thirdweb/dist/esm/wallets/__generated__/getWalletInfo.js
async function getWalletInfo(id, image) {
  if (isEcosystemWallet(id)) {
    const { getEcosystemWalletInfo } = await import("./get-ecosystem-wallet-info-HRASHZ5U.js");
    return image ? getEcosystemWalletInfo(id).then((info) => info.image_id) : getEcosystemWalletInfo(id);
  }
  switch (id) {
    case "smart": {
      return image ? import("./image-CZEVKSDD.js").then((img) => img.default) : import("./smart-GOSZ6KLE.js").then((w) => w.wallet);
    }
    case "inApp": {
      return image ? import("./image-UT6D5LIM.js").then((img) => img.default) : import("./inApp-RQNC3GM2.js").then((w) => w.wallet);
    }
    case "walletConnect": {
      return image ? import("./image-XPJLKRRI.js").then((img) => img.default) : import("./walletConnect-4SOZLMQZ.js").then((w) => w.wallet);
    }
    case "embedded": {
      return image ? import("./image-I2EVY3PN.js").then((img) => img.default) : import("./embedded-5JDH6LO6.js").then((w) => w.wallet);
    }
    case "adapter": {
      return image ? import("./image-7FZSFD63.js").then((img) => img.default) : import("./adapter-F5WOI5K5.js").then((w) => w.wallet);
    }
    case "io.metamask": {
      return image ? import("./image-PY3RCMKE.js").then((img) => img.default) : import("./io-YAK5FOPT.js").then((w) => w.wallet);
    }
    case "com.trustwallet.app": {
      return image ? import("./image-ARYWL2OH.js").then((img) => img.default) : import("./com.trustwallet-QTE52ZJ2.js").then((w) => w.wallet);
    }
    case "com.okex.wallet": {
      return image ? import("./image-7TE6IAEE.js").then((img) => img.default) : import("./com.okex-ASVE2B3U.js").then((w) => w.wallet);
    }
    case "com.bitget.web3": {
      return image ? import("./image-G77AOOTY.js").then((img) => img.default) : import("./com.bitget-2APLDUWF.js").then((w) => w.wallet);
    }
    case "com.binance": {
      return image ? import("./image-JRV26T7R.js").then((img) => img.default) : import("./com-HIQMW3M5.js").then((w) => w.wallet);
    }
    case "org.uniswap": {
      return image ? import("./image-NJXZFZEG.js").then((img) => img.default) : import("./org-Q7GOFRGY.js").then((w) => w.wallet);
    }
    case "com.safepal": {
      return image ? import("./image-QEGCG76B.js").then((img) => img.default) : import("./com-SKB3SMG6.js").then((w) => w.wallet);
    }
    case "me.rainbow": {
      return image ? import("./image-7O3C362W.js").then((img) => img.default) : import("./me-NGGLTLQU.js").then((w) => w.wallet);
    }
    case "com.bybit": {
      return image ? import("./image-P5CCQF6U.js").then((img) => img.default) : import("./com-OLXXEOCB.js").then((w) => w.wallet);
    }
    case "pro.tokenpocket": {
      return image ? import("./image-4E3QCNWY.js").then((img) => img.default) : import("./pro-PKIFCXCH.js").then((w) => w.wallet);
    }
    case "com.ledger": {
      return image ? import("./image-KBI4EQQC.js").then((img) => img.default) : import("./com-GGEHZ3ML.js").then((w) => w.wallet);
    }
    case "xyz.timelesswallet": {
      return image ? import("./image-I63OXZPK.js").then((img) => img.default) : import("./xyz-H7ZRM2VE.js").then((w) => w.wallet);
    }
    case "global.safe": {
      return image ? import("./image-IXHLX5GF.js").then((img) => img.default) : import("./global-ASRTB772.js").then((w) => w.wallet);
    }
    case "io.zerion.wallet": {
      return image ? import("./image-KAKKP25H.js").then((img) => img.default) : import("./io.zerion-DKRTCZVY.js").then((w) => w.wallet);
    }
    case "com.robinhood.wallet": {
      return image ? import("./image-WE7PFB2W.js").then((img) => img.default) : import("./com.robinhood-ZVFBQFK2.js").then((w) => w.wallet);
    }
    case "io.1inch.wallet": {
      return image ? import("./image-HNJVUIHP.js").then((img) => img.default) : import("./io.1inch-3Q4NZZ2L.js").then((w) => w.wallet);
    }
    case "com.crypto.wallet": {
      return image ? import("./image-GNG4HAZI.js").then((img) => img.default) : import("./com.crypto-53A63ZCL.js").then((w) => w.wallet);
    }
    case "com.exodus": {
      return image ? import("./image-L64YUXOP.js").then((img) => img.default) : import("./com-DXBW5XU7.js").then((w) => w.wallet);
    }
    case "xyz.argent": {
      return image ? import("./image-AHWRIMZI.js").then((img) => img.default) : import("./xyz-N4RTWSXS.js").then((w) => w.wallet);
    }
    case "im.token": {
      return image ? import("./image-3PHNAY7F.js").then((img) => img.default) : import("./im-ALROWXFB.js").then((w) => w.wallet);
    }
    case "com.blockchain": {
      return image ? import("./image-4TRY3NEW.js").then((img) => img.default) : import("./com-TH3B64WW.js").then((w) => w.wallet);
    }
    case "io.magiceden.wallet": {
      return image ? import("./image-BNSPIEBR.js").then((img) => img.default) : import("./io.magiceden-H3CGBW6M.js").then((w) => w.wallet);
    }
    case "com.kraken": {
      return image ? import("./image-M3IUK3S6.js").then((img) => img.default) : import("./com-5EVQS4IZ.js").then((w) => w.wallet);
    }
    case "app.backpack": {
      return image ? import("./image-2XQ227AO.js").then((img) => img.default) : import("./app-IVIV25DE.js").then((w) => w.wallet);
    }
    case "com.zengo": {
      return image ? import("./image-RJ6X2NMJ.js").then((img) => img.default) : import("./com-L5FHGFHX.js").then((w) => w.wallet);
    }
    case "com.mewwallet": {
      return image ? import("./image-ARHGIDNB.js").then((img) => img.default) : import("./com-QNHV5LXE.js").then((w) => w.wallet);
    }
    case "com.fireblocks": {
      return image ? import("./image-QEJ5TH25.js").then((img) => img.default) : import("./com-EW5K7JF2.js").then((w) => w.wallet);
    }
    case "org.mathwallet": {
      return image ? import("./image-NEI5WDWA.js").then((img) => img.default) : import("./org-JCLIAWVT.js").then((w) => w.wallet);
    }
    case "com.alphawallet": {
      return image ? import("./image-FIGWZRNB.js").then((img) => img.default) : import("./com-O7HEL5UM.js").then((w) => w.wallet);
    }
    case "com.unstoppabledomains": {
      return image ? import("./image-XD5TFSHC.js").then((img) => img.default) : import("./com-PK4DXA46.js").then((w) => w.wallet);
    }
    case "app.keyring": {
      return image ? import("./image-LDYJOQU6.js").then((img) => img.default) : import("./app-M6LRY2SK.js").then((w) => w.wallet);
    }
    case "xyz.frontier.wallet": {
      return image ? import("./image-VYS6PNRX.js").then((img) => img.default) : import("./xyz.frontier-GCK2SAXV.js").then((w) => w.wallet);
    }
    case "app.omni": {
      return image ? import("./image-KERZY3VS.js").then((img) => img.default) : import("./app-KCNXS7XQ.js").then((w) => w.wallet);
    }
    case "co.lobstr": {
      return image ? import("./image-3J2YWWMT.js").then((img) => img.default) : import("./co-2W272KST.js").then((w) => w.wallet);
    }
    case "technology.obvious": {
      return image ? import("./image-PPYVKDO3.js").then((img) => img.default) : import("./technology-NIZQELB7.js").then((w) => w.wallet);
    }
    case "com.ambire": {
      return image ? import("./image-3BBR6ZUL.js").then((img) => img.default) : import("./com-SGOLCA56.js").then((w) => w.wallet);
    }
    case "com.mtpelerin": {
      return image ? import("./image-GXMDZVE7.js").then((img) => img.default) : import("./com-6OLGJVDZ.js").then((w) => w.wallet);
    }
    case "io.internetmoney": {
      return image ? import("./image-YBCZSQ3A.js").then((img) => img.default) : import("./io-3SGNGSBU.js").then((w) => w.wallet);
    }
    case "app.walletnow": {
      return image ? import("./image-YFUELAZQ.js").then((img) => img.default) : import("./app-5PJX72YN.js").then((w) => w.wallet);
    }
    case "com.bitcoin": {
      return image ? import("./image-64EL5CZZ.js").then((img) => img.default) : import("./com-X7JZBOMI.js").then((w) => w.wallet);
    }
    case "io.alpha-u.wallet.web": {
      return image ? import("./image-5DMCMTIS.js").then((img) => img.default) : import("./io.alpha-u.wallet-RANY436R.js").then((w) => w.wallet);
    }
    case "com.coin98": {
      return image ? import("./image-FT5E5S2S.js").then((img) => img.default) : import("./com-VV2KAHH7.js").then((w) => w.wallet);
    }
    case "io.myabcwallet": {
      return image ? import("./image-BG36EIFN.js").then((img) => img.default) : import("./io-GQDRISAH.js").then((w) => w.wallet);
    }
    case "co.arculus": {
      return image ? import("./image-7Q42EE45.js").then((img) => img.default) : import("./co-CVN2M45H.js").then((w) => w.wallet);
    }
    case "com.opera": {
      return image ? import("./image-CVW43WHN.js").then((img) => img.default) : import("./com-M5EROV3A.js").then((w) => w.wallet);
    }
    case "com.chain": {
      return image ? import("./image-U2DNOUXB.js").then((img) => img.default) : import("./com-IQ3TTO6K.js").then((w) => w.wallet);
    }
    case "io.huddln": {
      return image ? import("./image-HTVYZ4M3.js").then((img) => img.default) : import("./io-DNXFQ4K2.js").then((w) => w.wallet);
    }
    case "com.get-verso": {
      return image ? import("./image-RPHSLWEQ.js").then((img) => img.default) : import("./com-FE3NAAEW.js").then((w) => w.wallet);
    }
    case "me.haha": {
      return image ? import("./image-YBTBDTUR.js").then((img) => img.default) : import("./me-KVZQT25O.js").then((w) => w.wallet);
    }
    case "pk.modular": {
      return image ? import("./image-IKZ2FUDX.js").then((img) => img.default) : import("./pk-OX3FADHO.js").then((w) => w.wallet);
    }
    case "org.kelp": {
      return image ? import("./image-GN5KL5XH.js").then((img) => img.default) : import("./org-3WSS4ISS.js").then((w) => w.wallet);
    }
    case "io.clingon": {
      return image ? import("./image-PG2LM3EN.js").then((img) => img.default) : import("./io-PJ4YO55N.js").then((w) => w.wallet);
    }
    case "com.broearn": {
      return image ? import("./image-EA2TAA73.js").then((img) => img.default) : import("./com-6DTOF6TL.js").then((w) => w.wallet);
    }
    case "com.coinomi": {
      return image ? import("./image-6UEQME7W.js").then((img) => img.default) : import("./com-XBDXJT7H.js").then((w) => w.wallet);
    }
    case "com.ripio": {
      return image ? import("./image-LRZBNW6B.js").then((img) => img.default) : import("./com-KW7LIQVX.js").then((w) => w.wallet);
    }
    case "com.sabay.wallet": {
      return image ? import("./image-3BYLTMYN.js").then((img) => img.default) : import("./com.sabay-NHKDAQVI.js").then((w) => w.wallet);
    }
    case "io.tokoin": {
      return image ? import("./image-XMKRZUH2.js").then((img) => img.default) : import("./io-NH2GD2IR.js").then((w) => w.wallet);
    }
    case "world.fncy": {
      return image ? import("./image-PNENEROM.js").then((img) => img.default) : import("./world-ZNOYGYAZ.js").then((w) => w.wallet);
    }
    case "io.copiosa": {
      return image ? import("./image-HXAPNAO4.js").then((img) => img.default) : import("./io-XMCECLIZ.js").then((w) => w.wallet);
    }
    case "com.liberawallet": {
      return image ? import("./image-3RZJFPYY.js").then((img) => img.default) : import("./com-EDWOBHQ5.js").then((w) => w.wallet);
    }
    case "io.certhis": {
      return image ? import("./image-GTS26XGE.js").then((img) => img.default) : import("./io-HBM5KOQE.js").then((w) => w.wallet);
    }
    case "com.burritowallet": {
      return image ? import("./image-FAAEH6VN.js").then((img) => img.default) : import("./com-FTU5JU6L.js").then((w) => w.wallet);
    }
    case "io.ancrypto": {
      return image ? import("./image-X6M72D7S.js").then((img) => img.default) : import("./io-B43YO5G7.js").then((w) => w.wallet);
    }
    case "network.cvl": {
      return image ? import("./image-KDIH7RV7.js").then((img) => img.default) : import("./network-64V4ODDY.js").then((w) => w.wallet);
    }
    case "io.cypherwallet": {
      return image ? import("./image-IW5JZSWC.js").then((img) => img.default) : import("./io-NVBZJAWM.js").then((w) => w.wallet);
    }
    case "app.status": {
      return image ? import("./image-NBPCTXNN.js").then((img) => img.default) : import("./app-FEBEDQ5O.js").then((w) => w.wallet);
    }
    case "io.enjin": {
      return image ? import("./image-BERR6HPQ.js").then((img) => img.default) : import("./io-O7JBQJEM.js").then((w) => w.wallet);
    }
    case "io.trinity-tech": {
      return image ? import("./image-77YEUPFU.js").then((img) => img.default) : import("./io-LX45HK7A.js").then((w) => w.wallet);
    }
    case "app.everspace": {
      return image ? import("./image-BAWP6F3E.js").then((img) => img.default) : import("./app-MS6Z5MIK.js").then((w) => w.wallet);
    }
    case "io.kriptomat": {
      return image ? import("./image-SPBIVFWA.js").then((img) => img.default) : import("./io-K5M75KPN.js").then((w) => w.wallet);
    }
    case "io.oxalus": {
      return image ? import("./image-52SKIAAZ.js").then((img) => img.default) : import("./io-JWG2DSVL.js").then((w) => w.wallet);
    }
    case "org.thetatoken": {
      return image ? import("./image-OI2FPOZK.js").then((img) => img.default) : import("./org-DASW2CEB.js").then((w) => w.wallet);
    }
    case "io.leapwallet": {
      return image ? import("./image-PXXJ7YGR.js").then((img) => img.default) : import("./io-RSWIM3NG.js").then((w) => w.wallet);
    }
    case "finance.islamicoin": {
      return image ? import("./image-SZDGRZKO.js").then((img) => img.default) : import("./finance-43KN2CYS.js").then((w) => w.wallet);
    }
    case "xyz.coca": {
      return image ? import("./image-KYZRZXTL.js").then((img) => img.default) : import("./xyz-P3VWILEP.js").then((w) => w.wallet);
    }
    case "com.monarchwallet": {
      return image ? import("./image-WFPL2XOD.js").then((img) => img.default) : import("./com-UYAKF2N2.js").then((w) => w.wallet);
    }
    case "co.filwallet": {
      return image ? import("./image-OAPLK3NK.js").then((img) => img.default) : import("./co-Y7ICLZEM.js").then((w) => w.wallet);
    }
    case "com.valoraapp": {
      return image ? import("./image-47XQBRNK.js").then((img) => img.default) : import("./com-FIMPM75U.js").then((w) => w.wallet);
    }
    case "com.coincircle": {
      return image ? import("./image-WLVFTPS6.js").then((img) => img.default) : import("./com-BA67M6JA.js").then((w) => w.wallet);
    }
    case "money.snowball": {
      return image ? import("./image-PIHQFTZW.js").then((img) => img.default) : import("./money-SUJPFHWI.js").then((w) => w.wallet);
    }
    case "io.paraswap": {
      return image ? import("./image-GSTKM7MD.js").then((img) => img.default) : import("./io-D255FR7U.js").then((w) => w.wallet);
    }
    case "network.mrhb": {
      return image ? import("./image-53R3T2KM.js").then((img) => img.default) : import("./network-WFECV2ZU.js").then((w) => w.wallet);
    }
    case "com.apollox": {
      return image ? import("./image-MOU2RL63.js").then((img) => img.default) : import("./com-ZRV5E3J2.js").then((w) => w.wallet);
    }
    case "com.ennowallet": {
      return image ? import("./image-JCM4SCK7.js").then((img) => img.default) : import("./com-SMDDEG7M.js").then((w) => w.wallet);
    }
    case "io.loopring.wallet": {
      return image ? import("./image-GRZ6ITK5.js").then((img) => img.default) : import("./io.loopring-BX5AMZUR.js").then((w) => w.wallet);
    }
    case "com.bee": {
      return image ? import("./image-FC2BPU25.js").then((img) => img.default) : import("./com-QUF6BW3N.js").then((w) => w.wallet);
    }
    case "cc.localtrade.lab": {
      return image ? import("./image-2NWF3JOZ.js").then((img) => img.default) : import("./cc.localtrade-QLM7DIOM.js").then((w) => w.wallet);
    }
    case "com.xcapit": {
      return image ? import("./image-KTCD3ACC.js").then((img) => img.default) : import("./com-IF7EFBYY.js").then((w) => w.wallet);
    }
    case "io.safematrix": {
      return image ? import("./image-GK45NHUD.js").then((img) => img.default) : import("./io-KZJ22VPA.js").then((w) => w.wallet);
    }
    case "com.neonwallet": {
      return image ? import("./image-UY6RYQ2N.js").then((img) => img.default) : import("./com-77L55XPO.js").then((w) => w.wallet);
    }
    case "xyz.sequence": {
      return image ? import("./image-HVHSAD3I.js").then((img) => img.default) : import("./xyz-C2SGGGJN.js").then((w) => w.wallet);
    }
    case "app.linen": {
      return image ? import("./image-U74NACFH.js").then((img) => img.default) : import("./app-HRMMGDE2.js").then((w) => w.wallet);
    }
    case "io.nabox": {
      return image ? import("./image-VVOWBOZ5.js").then((img) => img.default) : import("./io-KUZCCGFO.js").then((w) => w.wallet);
    }
    case "net.spatium": {
      return image ? import("./image-ZZDK3IJV.js").then((img) => img.default) : import("./net-KQRWOTI5.js").then((w) => w.wallet);
    }
    case "com.cryptnox": {
      return image ? import("./image-LPMTTLXQ.js").then((img) => img.default) : import("./com-RCO2EJCO.js").then((w) => w.wallet);
    }
    case "com.rktechworks": {
      return image ? import("./image-MJ7T6PNW.js").then((img) => img.default) : import("./com-AKMGTE6O.js").then((w) => w.wallet);
    }
    case "pro.assure": {
      return image ? import("./image-BNWDNWZ7.js").then((img) => img.default) : import("./pro-GX6XLDQ3.js").then((w) => w.wallet);
    }
    case "trade.flooz.wallet": {
      return image ? import("./image-JVUHELHQ.js").then((img) => img.default) : import("./trade.flooz-RHPEJ2TY.js").then((w) => w.wallet);
    }
    case "app.keplr": {
      return image ? import("./image-WFYTTEWO.js").then((img) => img.default) : import("./app-5BPIXU3J.js").then((w) => w.wallet);
    }
    case "com.crossmint": {
      return image ? import("./image-R6MZNPDW.js").then((img) => img.default) : import("./com-GPM5NTEM.js").then((w) => w.wallet);
    }
    case "com.pierwallet": {
      return image ? import("./image-CVFAIAQD.js").then((img) => img.default) : import("./com-P73TZQWI.js").then((w) => w.wallet);
    }
    case "app.core": {
      return image ? import("./image-NAO2HSQA.js").then((img) => img.default) : import("./app-RQXR7MZ5.js").then((w) => w.wallet);
    }
    case "app.keeper-wallet": {
      return image ? import("./image-IK4KYWSE.js").then((img) => img.default) : import("./app-FXWSJIOW.js").then((w) => w.wallet);
    }
    case "com.dcentwallet": {
      return image ? import("./image-ZTVWJS7Y.js").then((img) => img.default) : import("./com-BLXPUI47.js").then((w) => w.wallet);
    }
    case "com.withpaper": {
      return image ? import("./image-LH6FUJDR.js").then((img) => img.default) : import("./com-6SKA46QA.js").then((w) => w.wallet);
    }
    case "finance.klever": {
      return image ? import("./image-MYNVEIRO.js").then((img) => img.default) : import("./finance-BPBXKFLP.js").then((w) => w.wallet);
    }
    case "app.edge": {
      return image ? import("./image-A3KPWLYO.js").then((img) => img.default) : import("./app-6X4TWE2O.js").then((w) => w.wallet);
    }
    case "com.neftipedia": {
      return image ? import("./image-CPWAGIZP.js").then((img) => img.default) : import("./com-GY4RR463.js").then((w) => w.wallet);
    }
    case "io.goldbit": {
      return image ? import("./image-SHZEEMLS.js").then((img) => img.default) : import("./io-3U2SLLGY.js").then((w) => w.wallet);
    }
    case "com.coingrig": {
      return image ? import("./image-X75OW5JK.js").then((img) => img.default) : import("./com-V5JX4VHE.js").then((w) => w.wallet);
    }
    case "io.xfun": {
      return image ? import("./image-CTUNVIGS.js").then((img) => img.default) : import("./io-MMDEOZ3N.js").then((w) => w.wallet);
    }
    case "io.ricewallet": {
      return image ? import("./image-7ZYGDOS3.js").then((img) => img.default) : import("./io-XEVP2DVS.js").then((w) => w.wallet);
    }
    case "com.antiersolutions": {
      return image ? import("./image-25FYMXPP.js").then((img) => img.default) : import("./com-3M4YXHEP.js").then((w) => w.wallet);
    }
    case "io.okse": {
      return image ? import("./image-P7A7UY6Q.js").then((img) => img.default) : import("./io-TLTTCINM.js").then((w) => w.wallet);
    }
    case "com.aktionariat": {
      return image ? import("./image-3SSVXVQA.js").then((img) => img.default) : import("./com-ZXAV47A3.js").then((w) => w.wallet);
    }
    case "com.itoken": {
      return image ? import("./image-FY6NEZXX.js").then((img) => img.default) : import("./com-JCVLXBH6.js").then((w) => w.wallet);
    }
    case "io.zelus": {
      return image ? import("./image-FL2436IW.js").then((img) => img.default) : import("./io-RZ7W5PGA.js").then((w) => w.wallet);
    }
    case "com.cardstack": {
      return image ? import("./image-B42LGYLK.js").then((img) => img.default) : import("./com-SD7QZXVI.js").then((w) => w.wallet);
    }
    case "com.paybolt": {
      return image ? import("./image-BG7Q7U5Z.js").then((img) => img.default) : import("./com-TV4K6JFU.js").then((w) => w.wallet);
    }
    case "org.arianee": {
      return image ? import("./image-UEMJEQYK.js").then((img) => img.default) : import("./org-6JIS4GGD.js").then((w) => w.wallet);
    }
    case "io.slavi": {
      return image ? import("./image-O63UCCVG.js").then((img) => img.default) : import("./io-UP4NGDBV.js").then((w) => w.wallet);
    }
    case "com.plasma-wallet": {
      return image ? import("./image-LVVWGSGE.js").then((img) => img.default) : import("./com-GHGCPYMS.js").then((w) => w.wallet);
    }
    case "tech.defiantapp": {
      return image ? import("./image-5ZJILWQW.js").then((img) => img.default) : import("./tech-NOIENMRJ.js").then((w) => w.wallet);
    }
    case "cc.avacus": {
      return image ? import("./image-DX3LHC5E.js").then((img) => img.default) : import("./cc-XODV5KUP.js").then((w) => w.wallet);
    }
    case "org.bytebank": {
      return image ? import("./image-BPJ747KI.js").then((img) => img.default) : import("./org-U6MXPNQX.js").then((w) => w.wallet);
    }
    case "com.coolbitx.cwsapp": {
      return image ? import("./image-ORMFBD3D.js").then((img) => img.default) : import("./com.coolbitx-54F2B4QS.js").then((w) => w.wallet);
    }
    case "com.optowallet": {
      return image ? import("./image-AXBX7NPH.js").then((img) => img.default) : import("./com-D37EIKB4.js").then((w) => w.wallet);
    }
    case "network.trustkeys": {
      return image ? import("./image-LPCCHEBL.js").then((img) => img.default) : import("./network-OTQ66RXU.js").then((w) => w.wallet);
    }
    case "app.beewallet": {
      return image ? import("./image-FAMMBKWU.js").then((img) => img.default) : import("./app-XMYPKI5F.js").then((w) => w.wallet);
    }
    case "io.ttmwallet": {
      return image ? import("./image-MJJT532J.js").then((img) => img.default) : import("./io-2GPQFRQF.js").then((w) => w.wallet);
    }
    case "io.pltwallet": {
      return image ? import("./image-OROPDYCP.js").then((img) => img.default) : import("./io-UTHDBEVN.js").then((w) => w.wallet);
    }
    case "io.helixid": {
      return image ? import("./image-F3W3U35F.js").then((img) => img.default) : import("./io-6LSXSNGH.js").then((w) => w.wallet);
    }
    case "it.airgap": {
      return image ? import("./image-D3PKEAGG.js").then((img) => img.default) : import("./it-Y3SJTOXS.js").then((w) => w.wallet);
    }
    case "app.qubic.wallet": {
      return image ? import("./image-G3UZPUMP.js").then((img) => img.default) : import("./app.qubic-45GFYY2N.js").then((w) => w.wallet);
    }
    case "com.holdstation": {
      return image ? import("./image-KRKMGIRW.js").then((img) => img.default) : import("./com-IF7AHQFJ.js").then((w) => w.wallet);
    }
    case "com.saakuru.app": {
      return image ? import("./image-ZEXGTQP2.js").then((img) => img.default) : import("./com.saakuru-3DH4OCRJ.js").then((w) => w.wallet);
    }
    case "com.3swallet": {
      return image ? import("./image-7KY4GSTR.js").then((img) => img.default) : import("./com-UUE4VT6F.js").then((w) => w.wallet);
    }
    case "com.payperless": {
      return image ? import("./image-KHNJTNG5.js").then((img) => img.default) : import("./com-ZFAFSEQR.js").then((w) => w.wallet);
    }
    case "digital.minerva": {
      return image ? import("./image-6PJHCB7N.js").then((img) => img.default) : import("./digital-TWPYUQDY.js").then((w) => w.wallet);
    }
    case "finance.voltage": {
      return image ? import("./image-R3QO5B5O.js").then((img) => img.default) : import("./finance-ROSDRD4N.js").then((w) => w.wallet);
    }
    case "com.lif3": {
      return image ? import("./image-J3BDNCMB.js").then((img) => img.default) : import("./com-4GPSLLOX.js").then((w) => w.wallet);
    }
    case "net.shinobi-wallet": {
      return image ? import("./image-FX3DIZMC.js").then((img) => img.default) : import("./net-TAG5PSHX.js").then((w) => w.wallet);
    }
    case "com.kryptogo": {
      return image ? import("./image-5KGJZFSW.js").then((img) => img.default) : import("./com-2M7N6F5U.js").then((w) => w.wallet);
    }
    case "com.feralfile.app": {
      return image ? import("./image-L7CIHOLP.js").then((img) => img.default) : import("./com.feralfile-6FVJKEDQ.js").then((w) => w.wallet);
    }
    case "com.bifrostwallet": {
      return image ? import("./image-XMXXH2OG.js").then((img) => img.default) : import("./com-TDMJBI2M.js").then((w) => w.wallet);
    }
    case "com.nufinetes": {
      return image ? import("./image-CJLAIZ3U.js").then((img) => img.default) : import("./com-ABZNTRLZ.js").then((w) => w.wallet);
    }
    case "io.wallet3": {
      return image ? import("./image-DQRQW2SI.js").then((img) => img.default) : import("./io-6JQ4CHJH.js").then((w) => w.wallet);
    }
    case "com.abra": {
      return image ? import("./image-XOUIMWYP.js").then((img) => img.default) : import("./com-VCBNOXWU.js").then((w) => w.wallet);
    }
    case "app.imem": {
      return image ? import("./image-TBQHCWRX.js").then((img) => img.default) : import("./app-R4JLN24B.js").then((w) => w.wallet);
    }
    case "com.premanft": {
      return image ? import("./image-V5HQDG55.js").then((img) => img.default) : import("./com-O32AFMCX.js").then((w) => w.wallet);
    }
    case "so.onekey.app.wallet": {
      return image ? import("./image-5C7T5MCW.js").then((img) => img.default) : import("./so.onekey.app-3NGOLXP4.js").then((w) => w.wallet);
    }
    case "finance.slingshot": {
      return image ? import("./image-BAPZ7ZQ5.js").then((img) => img.default) : import("./finance-B7FMBRBP.js").then((w) => w.wallet);
    }
    case "com.kriptonio": {
      return image ? import("./image-PRRYYAGC.js").then((img) => img.default) : import("./com-XIFKBSI7.js").then((w) => w.wallet);
    }
    case "io.streakk": {
      return image ? import("./image-KNB5HTQS.js").then((img) => img.default) : import("./io-S3TORZWD.js").then((w) => w.wallet);
    }
    case "com.saitamatoken": {
      return image ? import("./image-IEQIMBFO.js").then((img) => img.default) : import("./com-DMBFR3TM.js").then((w) => w.wallet);
    }
    case "group.com.flowfoundation.wallet": {
      return image ? import("./image-NG6MRBT7.js").then((img) => img.default) : import("./group.com.flowfoundation-Y5NGFX4Q.js").then((w) => w.wallet);
    }
    case "io.hippowallet": {
      return image ? import("./image-6V6UQQYW.js").then((img) => img.default) : import("./io-TRUR62J5.js").then((w) => w.wallet);
    }
    case "io.cosmostation": {
      return image ? import("./image-Y6FK2F2P.js").then((img) => img.default) : import("./io-DK5QUX7W.js").then((w) => w.wallet);
    }
    case "org.bitizen": {
      return image ? import("./image-FK2QQOEC.js").then((img) => img.default) : import("./org-RVVOAAYD.js").then((w) => w.wallet);
    }
    case "io.blocto": {
      return image ? import("./image-WRJBQNVE.js").then((img) => img.default) : import("./io-57PCDAYK.js").then((w) => w.wallet);
    }
    case "com.humbl": {
      return image ? import("./image-JGVAVBEO.js").then((img) => img.default) : import("./com-Q7LI3IVT.js").then((w) => w.wallet);
    }
    case "io.passpay": {
      return image ? import("./image-XIC6EKNY.js").then((img) => img.default) : import("./io-PVGHQBA3.js").then((w) => w.wallet);
    }
    case "app.ultimate": {
      return image ? import("./image-QTWRL6IY.js").then((img) => img.default) : import("./app-JGIJQHBM.js").then((w) => w.wallet);
    }
    case "me.astrox": {
      return image ? import("./image-KMUGR2JC.js").then((img) => img.default) : import("./me-KZ3JFV6V.js").then((w) => w.wallet);
    }
    case "org.thorwallet": {
      return image ? import("./image-ENIPULMK.js").then((img) => img.default) : import("./org-XS7DVMFS.js").then((w) => w.wallet);
    }
    case "app.fizzwallet": {
      return image ? import("./image-BZHOLM24.js").then((img) => img.default) : import("./app-Z3ZKSY2N.js").then((w) => w.wallet);
    }
    case "app.stickey": {
      return image ? import("./image-4XAPYK5Y.js").then((img) => img.default) : import("./app-IC2A3RDS.js").then((w) => w.wallet);
    }
    case "com.klipwallet": {
      return image ? import("./image-POSUEFBS.js").then((img) => img.default) : import("./com-6OK3IP35.js").then((w) => w.wallet);
    }
    case "app.coinstats": {
      return image ? import("./image-VMYFLQHY.js").then((img) => img.default) : import("./app-JPKIQZES.js").then((w) => w.wallet);
    }
    case "land.liker": {
      return image ? import("./image-4ZXADMKV.js").then((img) => img.default) : import("./land-CKBS6ZRZ.js").then((w) => w.wallet);
    }
    case "app.krystal": {
      return image ? import("./image-7YYGXP6N.js").then((img) => img.default) : import("./app-O5DHUCKC.js").then((w) => w.wallet);
    }
    case "fi.pillar": {
      return image ? import("./image-WXZTVPXW.js").then((img) => img.default) : import("./fi-AVCNJCZU.js").then((w) => w.wallet);
    }
    case "io.harti": {
      return image ? import("./image-OGVGI6IX.js").then((img) => img.default) : import("./io-L6UQ2STJ.js").then((w) => w.wallet);
    }
    case "net.stasis": {
      return image ? import("./image-R2PA3K44.js").then((img) => img.default) : import("./net-Z743Z374.js").then((w) => w.wallet);
    }
    case "io.novawallet": {
      return image ? import("./image-6VK7QNZB.js").then((img) => img.default) : import("./io-ZIBKO2EM.js").then((w) => w.wallet);
    }
    case "io.dttd": {
      return image ? import("./image-7TSPO7Y6.js").then((img) => img.default) : import("./io-BH2JNQLL.js").then((w) => w.wallet);
    }
    case "com.foxwallet": {
      return image ? import("./image-MBAEXQG7.js").then((img) => img.default) : import("./com-2C4IBZJC.js").then((w) => w.wallet);
    }
    case "network.haqq": {
      return image ? import("./image-2TID5QYA.js").then((img) => img.default) : import("./network-FCNDYIML.js").then((w) => w.wallet);
    }
    case "com.tomi": {
      return image ? import("./image-VF6EIX5D.js").then((img) => img.default) : import("./com-URZWZY6W.js").then((w) => w.wallet);
    }
    case "io.tradestrike": {
      return image ? import("./image-YB4GRPL2.js").then((img) => img.default) : import("./io-E2M2HE5Z.js").then((w) => w.wallet);
    }
    case "app.subwallet": {
      return image ? import("./image-KFBVQYIK.js").then((img) => img.default) : import("./app-ICREXY5T.js").then((w) => w.wallet);
    }
    case "tech.okto": {
      return image ? import("./image-KI6G2NXA.js").then((img) => img.default) : import("./tech-4UEY76KS.js").then((w) => w.wallet);
    }
    case "app.catecoin": {
      return image ? import("./image-HRDDJY2V.js").then((img) => img.default) : import("./app-C6AFF7V2.js").then((w) => w.wallet);
    }
    case "io.ukiss": {
      return image ? import("./image-J72YUI7L.js").then((img) => img.default) : import("./io-TRTOW6FM.js").then((w) => w.wallet);
    }
    case "com.tellaw": {
      return image ? import("./image-KLR4DGUS.js").then((img) => img.default) : import("./com-7Y4S6AXS.js").then((w) => w.wallet);
    }
    case "com.tangem": {
      return image ? import("./image-4NVIL47X.js").then((img) => img.default) : import("./com-CAZP4XAV.js").then((w) => w.wallet);
    }
    case "is.callback": {
      return image ? import("./image-VTXLRGUL.js").then((img) => img.default) : import("./is-UU4FXVPC.js").then((w) => w.wallet);
    }
    case "io.summonersarena": {
      return image ? import("./image-SZ53EEZI.js").then((img) => img.default) : import("./io-EA2JOUTZ.js").then((w) => w.wallet);
    }
    case "co.xellar": {
      return image ? import("./image-XLAW77N3.js").then((img) => img.default) : import("./co-4KSSMBL6.js").then((w) => w.wallet);
    }
    case "io.talken": {
      return image ? import("./image-M4Z3YR4Z.js").then((img) => img.default) : import("./io-5FGKYHDW.js").then((w) => w.wallet);
    }
    case "xyz.uniultra.wallet": {
      return image ? import("./image-JIBY7LRH.js").then((img) => img.default) : import("./xyz.uniultra-YQ7QTAVX.js").then((w) => w.wallet);
    }
    case "io.ozonewallet": {
      return image ? import("./image-MRBGWX2E.js").then((img) => img.default) : import("./io-XFMVSGBX.js").then((w) => w.wallet);
    }
    case "com.tiduswallet": {
      return image ? import("./image-LZY7JTRH.js").then((img) => img.default) : import("./com-MIWCOGLD.js").then((w) => w.wallet);
    }
    case "world.ixo": {
      return image ? import("./image-4B3NOTPE.js").then((img) => img.default) : import("./world-AAINEXQX.js").then((w) => w.wallet);
    }
    case "io.zelcore": {
      return image ? import("./image-KFCJWUYA.js").then((img) => img.default) : import("./io-YSSN6F3W.js").then((w) => w.wallet);
    }
    case "world.dosi.vault": {
      return image ? import("./image-4R5252N7.js").then((img) => img.default) : import("./world.dosi-Y2A7IFAO.js").then((w) => w.wallet);
    }
    case "com.ullapay": {
      return image ? import("./image-TCNXR5Y6.js").then((img) => img.default) : import("./com-7CFZD43L.js").then((w) => w.wallet);
    }
    case "com.ellipal": {
      return image ? import("./image-XWTER34E.js").then((img) => img.default) : import("./com-BJY3WLWU.js").then((w) => w.wallet);
    }
    case "money.unstoppable": {
      return image ? import("./image-DFLQ2XFN.js").then((img) => img.default) : import("./money-E4VOZHJR.js").then((w) => w.wallet);
    }
    case "dev.auroracloud": {
      return image ? import("./image-BKAIFC5N.js").then((img) => img.default) : import("./dev-CGZJG7WM.js").then((w) => w.wallet);
    }
    case "zone.bitverse": {
      return image ? import("./image-EQG2WO73.js").then((img) => img.default) : import("./zone-DAJ2TSNU.js").then((w) => w.wallet);
    }
    case "io.konio": {
      return image ? import("./image-WZMMOWKO.js").then((img) => img.default) : import("./io-LVXFK7U5.js").then((w) => w.wallet);
    }
    case "net.gateweb3": {
      return image ? import("./image-6GWDZO4B.js").then((img) => img.default) : import("./net-Q5SVTUAO.js").then((w) => w.wallet);
    }
    case "app.utorg": {
      return image ? import("./image-Z5YWXRKQ.js").then((img) => img.default) : import("./app-4OQAM2FO.js").then((w) => w.wallet);
    }
    case "com.coinsdo": {
      return image ? import("./image-Q5EEGXM4.js").then((img) => img.default) : import("./com-UWJR5TCW.js").then((w) => w.wallet);
    }
    case "app.ammer": {
      return image ? import("./image-YJF46UIP.js").then((img) => img.default) : import("./app-BJYH6WND.js").then((w) => w.wallet);
    }
    case "us.binance": {
      return image ? import("./image-YA6DLLJV.js").then((img) => img.default) : import("./us-A63RIC6G.js").then((w) => w.wallet);
    }
    case "co.muza": {
      return image ? import("./image-RBD6CLZB.js").then((img) => img.default) : import("./co-7LLLWALO.js").then((w) => w.wallet);
    }
    case "com.fxwallet": {
      return image ? import("./image-6ORYMNNS.js").then((img) => img.default) : import("./com-CADNHKSZ.js").then((w) => w.wallet);
    }
    case "app.ryipay": {
      return image ? import("./image-ODMYDNAD.js").then((img) => img.default) : import("./app-3BIDNXMN.js").then((w) => w.wallet);
    }
    case "com.roninchain.wallet": {
      return image ? import("./image-5N5BSRVW.js").then((img) => img.default) : import("./com.roninchain-VOI4TK6H.js").then((w) => w.wallet);
    }
    case "org.dota168": {
      return image ? import("./image-PYNIXTYI.js").then((img) => img.default) : import("./org-NOFWJHNU.js").then((w) => w.wallet);
    }
    case "io.altme": {
      return image ? import("./image-C3DYJZTD.js").then((img) => img.default) : import("./io-XXPRYPG2.js").then((w) => w.wallet);
    }
    case "com.bitpie": {
      return image ? import("./image-LIVCGAOB.js").then((img) => img.default) : import("./com-ECD626HL.js").then((w) => w.wallet);
    }
    case "io.moonstake": {
      return image ? import("./image-UFGCOQGW.js").then((img) => img.default) : import("./io-2ZBQUD2Z.js").then((w) => w.wallet);
    }
    case "gg.indi": {
      return image ? import("./image-AZATAZUW.js").then((img) => img.default) : import("./gg-7LOCEDJU.js").then((w) => w.wallet);
    }
    case "io.yusetoken": {
      return image ? import("./image-ZPU7UHI2.js").then((img) => img.default) : import("./io-7F2E4V7R.js").then((w) => w.wallet);
    }
    case "com.coininn": {
      return image ? import("./image-G566PLZR.js").then((img) => img.default) : import("./com-FLBLVTBY.js").then((w) => w.wallet);
    }
    case "io.functionx": {
      return image ? import("./image-EA6HZGAP.js").then((img) => img.default) : import("./io-QLQLOVVJ.js").then((w) => w.wallet);
    }
    case "io.pockie": {
      return image ? import("./image-J5PWF63O.js").then((img) => img.default) : import("./io-TZCRE2KR.js").then((w) => w.wallet);
    }
    case "com.amazewallet": {
      return image ? import("./image-EIETVCAX.js").then((img) => img.default) : import("./com-2FMSNEYI.js").then((w) => w.wallet);
    }
    case "com.paliwallet": {
      return image ? import("./image-NOPIDNPE.js").then((img) => img.default) : import("./com-G4PABABE.js").then((w) => w.wallet);
    }
    case "me.easy": {
      return image ? import("./image-OOBSXLNR.js").then((img) => img.default) : import("./me-3MEDDZC5.js").then((w) => w.wallet);
    }
    case "live.superex": {
      return image ? import("./image-LOHR2RIE.js").then((img) => img.default) : import("./live-5DC3MAHO.js").then((w) => w.wallet);
    }
    case "com.secuxtech": {
      return image ? import("./image-MBFXNJFS.js").then((img) => img.default) : import("./com-WWOKZBON.js").then((w) => w.wallet);
    }
    case "io.didwallet": {
      return image ? import("./image-SFV565LD.js").then((img) => img.default) : import("./io-24YA5BRN.js").then((w) => w.wallet);
    }
    case "social.halo": {
      return image ? import("./image-UHZP3BTN.js").then((img) => img.default) : import("./social-WQVOUPQP.js").then((w) => w.wallet);
    }
    case "com.sinohope": {
      return image ? import("./image-45QC47QJ.js").then((img) => img.default) : import("./com-Q4R5QXMD.js").then((w) => w.wallet);
    }
    case "com.ballet": {
      return image ? import("./image-7SUEPBLK.js").then((img) => img.default) : import("./com-DJRJPGME.js").then((w) => w.wallet);
    }
    case "com.opz": {
      return image ? import("./image-5B72RBCK.js").then((img) => img.default) : import("./com-MPMYNQIR.js").then((w) => w.wallet);
    }
    case "io.fizen": {
      return image ? import("./image-HOZVYDVK.js").then((img) => img.default) : import("./io-ANOLLYWK.js").then((w) => w.wallet);
    }
    case "com.kresus": {
      return image ? import("./image-ZIEWC7ZM.js").then((img) => img.default) : import("./com-KPWIFBRV.js").then((w) => w.wallet);
    }
    case "com.midoin": {
      return image ? import("./image-DJJHB4NK.js").then((img) => img.default) : import("./com-TE3IRJVG.js").then((w) => w.wallet);
    }
    case "app.onto": {
      return image ? import("./image-AI7WZWEM.js").then((img) => img.default) : import("./app-RRYWU2T6.js").then((w) => w.wallet);
    }
    case "com.oasys-wallet": {
      return image ? import("./image-SQEC6SWZ.js").then((img) => img.default) : import("./com-MT3HKQ3R.js").then((w) => w.wallet);
    }
    case "org.gooddollar": {
      return image ? import("./image-IFJOAVNI.js").then((img) => img.default) : import("./org-BHEY6VU5.js").then((w) => w.wallet);
    }
    case "id.competence": {
      return image ? import("./image-UGV6XSD5.js").then((img) => img.default) : import("./id-JCDDJMLP.js").then((w) => w.wallet);
    }
    case "ai.spotonchain.platform": {
      return image ? import("./image-EHTA7ND2.js").then((img) => img.default) : import("./ai.spotonchain-Q44G73RV.js").then((w) => w.wallet);
    }
    case "network.dgg": {
      return image ? import("./image-4KSYJONE.js").then((img) => img.default) : import("./network-3HZ5XME7.js").then((w) => w.wallet);
    }
    case "llc.besc": {
      return image ? import("./image-MUVOHF4W.js").then((img) => img.default) : import("./llc-JHHSY2C6.js").then((w) => w.wallet);
    }
    case "app.gamic": {
      return image ? import("./image-WCQARS7C.js").then((img) => img.default) : import("./app-4WB6G67C.js").then((w) => w.wallet);
    }
    case "baby.smart": {
      return image ? import("./image-SON77BIL.js").then((img) => img.default) : import("./baby-VXQWXU2X.js").then((w) => w.wallet);
    }
    case "network.gridlock": {
      return image ? import("./image-Z2CATCDR.js").then((img) => img.default) : import("./network-7CN3ZGB5.js").then((w) => w.wallet);
    }
    case "app.zeal": {
      return image ? import("./image-DGAWLDDT.js").then((img) => img.default) : import("./app-PUVYKP42.js").then((w) => w.wallet);
    }
    case "com.ivirse": {
      return image ? import("./image-LLODPB4V.js").then((img) => img.default) : import("./com-XUD7P7EW.js").then((w) => w.wallet);
    }
    case "ch.dssecurity": {
      return image ? import("./image-R65TRIAG.js").then((img) => img.default) : import("./ch-DJKOH7L6.js").then((w) => w.wallet);
    }
    case "com.concordium": {
      return image ? import("./image-SDS6MUPN.js").then((img) => img.default) : import("./com-7ESFL2XC.js").then((w) => w.wallet);
    }
    case "io.zkape": {
      return image ? import("./image-IO2WKRLV.js").then((img) => img.default) : import("./io-XAR6YN2H.js").then((w) => w.wallet);
    }
    case "com.thirdweb": {
      return image ? import("./image-WEIHHJID.js").then((img) => img.default) : import("./com-7FNIVOH3.js").then((w) => w.wallet);
    }
    case "io.pitaka": {
      return image ? import("./image-QFDO4ERO.js").then((img) => img.default) : import("./io-N5RGMBCH.js").then((w) => w.wallet);
    }
    case "com.trusteeglobal": {
      return image ? import("./image-CTC6AICN.js").then((img) => img.default) : import("./com-I4GOOXU3.js").then((w) => w.wallet);
    }
    case "org.mugambo": {
      return image ? import("./image-43VCVTQW.js").then((img) => img.default) : import("./org-5JOGDD4T.js").then((w) => w.wallet);
    }
    case "cc.dropp": {
      return image ? import("./image-3WCIGCJE.js").then((img) => img.default) : import("./cc-VULA5ISR.js").then((w) => w.wallet);
    }
    case "xyz.roam.wallet": {
      return image ? import("./image-OS6F5ASF.js").then((img) => img.default) : import("./xyz.roam-5PWBMVLT.js").then((w) => w.wallet);
    }
    case "world.qoin": {
      return image ? import("./image-CTWYLNEW.js").then((img) => img.default) : import("./world-IQ7VTL27.js").then((w) => w.wallet);
    }
    case "com.meld.app": {
      return image ? import("./image-IGUKS27J.js").then((img) => img.default) : import("./com.meld-U3J7XNQI.js").then((w) => w.wallet);
    }
    case "com.bestwallet": {
      return image ? import("./image-ZNKOF6C2.js").then((img) => img.default) : import("./com-CHX2N46L.js").then((w) => w.wallet);
    }
    case "io.hyperpay": {
      return image ? import("./image-K423YJHO.js").then((img) => img.default) : import("./io-JGARBW27.js").then((w) => w.wallet);
    }
    case "io.xucre": {
      return image ? import("./image-WGY4E5ZS.js").then((img) => img.default) : import("./io-FVLW4E3K.js").then((w) => w.wallet);
    }
    case "app.herewallet": {
      return image ? import("./image-OMOWTLJH.js").then((img) => img.default) : import("./app-XKLTXZZ5.js").then((w) => w.wallet);
    }
    case "com.cakewallet": {
      return image ? import("./image-4BA3AXSR.js").then((img) => img.default) : import("./com-CMFYLJ3T.js").then((w) => w.wallet);
    }
    case "io.unagi.unawallet": {
      return image ? import("./image-CWA3VVUM.js").then((img) => img.default) : import("./io.unagi-YSJDUHMV.js").then((w) => w.wallet);
    }
    case "io.ethos": {
      return image ? import("./image-2P2TSVGP.js").then((img) => img.default) : import("./io-T6NWZUPR.js").then((w) => w.wallet);
    }
    case "app.pluswallet": {
      return image ? import("./image-R5MXAYSI.js").then((img) => img.default) : import("./app-VCRSWMVS.js").then((w) => w.wallet);
    }
    case "com.authentrend": {
      return image ? import("./image-VB7IUURT.js").then((img) => img.default) : import("./com-ZU576A7T.js").then((w) => w.wallet);
    }
    case "finance.plena": {
      return image ? import("./image-OCLQH6ET.js").then((img) => img.default) : import("./finance-TUEUOJYQ.js").then((w) => w.wallet);
    }
    case "com.wemix": {
      return image ? import("./image-3QRD6CSU.js").then((img) => img.default) : import("./com-VMFG63WD.js").then((w) => w.wallet);
    }
    case "com.gemwallet": {
      return image ? import("./image-6HQIDK6K.js").then((img) => img.default) : import("./com-4MAE4SLL.js").then((w) => w.wallet);
    }
    case "com.caesiumlab": {
      return image ? import("./image-XIG5YKUC.js").then((img) => img.default) : import("./com-ICJNKASS.js").then((w) => w.wallet);
    }
    case "pro.fintoken": {
      return image ? import("./image-4UXLJEY6.js").then((img) => img.default) : import("./pro-VKWWWAVU.js").then((w) => w.wallet);
    }
    case "com.peakdefi": {
      return image ? import("./image-JBLGJN6S.js").then((img) => img.default) : import("./com-XCMJDOF3.js").then((w) => w.wallet);
    }
    case "com.nodle": {
      return image ? import("./image-OYVSS2NW.js").then((img) => img.default) : import("./com-SGLYOLT6.js").then((w) => w.wallet);
    }
    case "com.cryptokara": {
      return image ? import("./image-5EEVHG37.js").then((img) => img.default) : import("./com-FUBWL26I.js").then((w) => w.wallet);
    }
    case "com.poolsmobility.wallet": {
      return image ? import("./image-XNCYDJC5.js").then((img) => img.default) : import("./com.poolsmobility-MPUANJAV.js").then((w) => w.wallet);
    }
    case "com.veworld": {
      return image ? import("./image-K675SLCQ.js").then((img) => img.default) : import("./com-ZCJBLCGU.js").then((w) => w.wallet);
    }
    case "com.azcoiner": {
      return image ? import("./image-DXG4ARNI.js").then((img) => img.default) : import("./com-UGZ7W7CO.js").then((w) => w.wallet);
    }
    case "technology.jambo": {
      return image ? import("./image-YFLBT3YJ.js").then((img) => img.default) : import("./technology-4ON2FUI4.js").then((w) => w.wallet);
    }
    case "vc.uincubator.api": {
      return image ? import("./image-PFLIBWNB.js").then((img) => img.default) : import("./vc.uincubator-4WN5IZUJ.js").then((w) => w.wallet);
    }
    case "app.m1nty": {
      return image ? import("./image-BFCLTXKV.js").then((img) => img.default) : import("./app-OXRH4XRW.js").then((w) => w.wallet);
    }
    case "io.noone": {
      return image ? import("./image-MO47H6ZA.js").then((img) => img.default) : import("./io-24QRWA4Y.js").then((w) => w.wallet);
    }
    case "com.bitso": {
      return image ? import("./image-NBHYUHD2.js").then((img) => img.default) : import("./com-RVMYGOTN.js").then((w) => w.wallet);
    }
    case "online.puzzle": {
      return image ? import("./image-CIXW5BVB.js").then((img) => img.default) : import("./online-4UBMQVRH.js").then((w) => w.wallet);
    }
    case "network.blackfort": {
      return image ? import("./image-R6ZY7ODL.js").then((img) => img.default) : import("./network-FHGUIPWM.js").then((w) => w.wallet);
    }
    case "io.armana.portal": {
      return image ? import("./image-TLQGVZIE.js").then((img) => img.default) : import("./io.armana-FQHHA7CM.js").then((w) => w.wallet);
    }
    case "io.bharatbox": {
      return image ? import("./image-O3FWYAMJ.js").then((img) => img.default) : import("./io-X54FGMH5.js").then((w) => w.wallet);
    }
    case "com.greengloryglobal": {
      return image ? import("./image-TLCK7IBC.js").then((img) => img.default) : import("./com-Z7KH6LCA.js").then((w) => w.wallet);
    }
    case "com.x9wallet": {
      return image ? import("./image-PX7PII22.js").then((img) => img.default) : import("./com-YMKJ5J5V.js").then((w) => w.wallet);
    }
    case "io.miraiapp": {
      return image ? import("./image-YBPOXOCZ.js").then((img) => img.default) : import("./io-PV6OW5YR.js").then((w) => w.wallet);
    }
    case "io.kigo": {
      return image ? import("./image-WJBIEWRP.js").then((img) => img.default) : import("./io-WHYZVMCN.js").then((w) => w.wallet);
    }
    case "com.getcogni": {
      return image ? import("./image-BAWNJLDB.js").then((img) => img.default) : import("./com-5NZOMD6O.js").then((w) => w.wallet);
    }
    case "com.fastex.wallet": {
      return image ? import("./image-JCMNNBDZ.js").then((img) => img.default) : import("./com.fastex-OSMD2QUY.js").then((w) => w.wallet);
    }
    case "io.wallacy": {
      return image ? import("./image-LY3RZ44R.js").then((img) => img.default) : import("./io-YKR37A4G.js").then((w) => w.wallet);
    }
    case "org.talkapp": {
      return image ? import("./image-RLLVBJI7.js").then((img) => img.default) : import("./org-IQR2KWLE.js").then((w) => w.wallet);
    }
    case "com.usecapsule": {
      return image ? import("./image-D6HXSW23.js").then((img) => img.default) : import("./com-AODZYQWL.js").then((w) => w.wallet);
    }
    case "com.unitywallet": {
      return image ? import("./image-VNMGUJNB.js").then((img) => img.default) : import("./com-HQ3ZNBVK.js").then((w) => w.wallet);
    }
    case "app.sinum": {
      return image ? import("./image-GSMGI7VJ.js").then((img) => img.default) : import("./app-QASKZRBP.js").then((w) => w.wallet);
    }
    case "finance.soulswap.app": {
      return image ? import("./image-TLL7ZWDJ.js").then((img) => img.default) : import("./finance.soulswap-JBPBKOGF.js").then((w) => w.wallet);
    }
    case "com.shapeshift": {
      return image ? import("./image-TVOSPHN4.js").then((img) => img.default) : import("./com-SH3JOPDV.js").then((w) => w.wallet);
    }
    case "finance.panaroma": {
      return image ? import("./image-J26M6VNU.js").then((img) => img.default) : import("./finance-XE4OWK2N.js").then((w) => w.wallet);
    }
    case "io.neopin": {
      return image ? import("./image-PJ56ZJZI.js").then((img) => img.default) : import("./io-H454JI3W.js").then((w) => w.wallet);
    }
    case "com.alicebob": {
      return image ? import("./image-YCZSZUXE.js").then((img) => img.default) : import("./com-IVJ4ODXS.js").then((w) => w.wallet);
    }
    case "co.cyber.wallet": {
      return image ? import("./image-3NR45HO4.js").then((img) => img.default) : import("./co.cyber-W3ZB2PHU.js").then((w) => w.wallet);
    }
    case "com.dextrade": {
      return image ? import("./image-2DVLCOT5.js").then((img) => img.default) : import("./com-UJZJA6SZ.js").then((w) => w.wallet);
    }
    case "com.hashpack.wallet": {
      return image ? import("./image-NFV4FTVS.js").then((img) => img.default) : import("./com.hashpack-VBVIF33I.js").then((w) => w.wallet);
    }
    case "org.thepulsewallet": {
      return image ? import("./image-QBQHKWYU.js").then((img) => img.default) : import("./org-PJ6LCHSF.js").then((w) => w.wallet);
    }
    case "id.co.pintu": {
      return image ? import("./image-G4VVMDLA.js").then((img) => img.default) : import("./id.co-KFRG5HP3.js").then((w) => w.wallet);
    }
    case "io.bladewallet": {
      return image ? import("./image-4MUDZ5WJ.js").then((img) => img.default) : import("./io-WTWNTQY2.js").then((w) => w.wallet);
    }
    case "com.pandoshi": {
      return image ? import("./image-WAEURFBG.js").then((img) => img.default) : import("./com-ZL3AON34.js").then((w) => w.wallet);
    }
    case "money.keychain": {
      return image ? import("./image-J3VWG5MZ.js").then((img) => img.default) : import("./money-5LMST26O.js").then((w) => w.wallet);
    }
    case "com.mpcvault.broswerplugin": {
      return image ? import("./image-V7OWVN52.js").then((img) => img.default) : import("./com.mpcvault-5RS5XOJS.js").then((w) => w.wallet);
    }
    case "io.legacynetwork": {
      return image ? import("./image-G4OOMJFL.js").then((img) => img.default) : import("./io-E6S6IBUY.js").then((w) => w.wallet);
    }
    case "io.getclave": {
      return image ? import("./image-NG66JYBW.js").then((img) => img.default) : import("./io-CTRCTP32.js").then((w) => w.wallet);
    }
    case "me.iopay": {
      return image ? import("./image-RCPUSQIA.js").then((img) => img.default) : import("./me-N5NHUYM7.js").then((w) => w.wallet);
    }
    case "app.kabila": {
      return image ? import("./image-OMOLG6BP.js").then((img) => img.default) : import("./app-SFALV7Q7.js").then((w) => w.wallet);
    }
    case "one.mixin.messenger": {
      return image ? import("./image-VUQ2UL4L.js").then((img) => img.default) : import("./one.mixin-AYEP2MDG.js").then((w) => w.wallet);
    }
    case "com.bettatrade": {
      return image ? import("./image-FFW5ALAV.js").then((img) => img.default) : import("./com-EC74KZVH.js").then((w) => w.wallet);
    }
    case "io.scramberry": {
      return image ? import("./image-MDU42EYU.js").then((img) => img.default) : import("./io-J7ET3CPL.js").then((w) => w.wallet);
    }
    case "io.earthwallet": {
      return image ? import("./image-T5624ZCD.js").then((img) => img.default) : import("./io-3FD4NDEY.js").then((w) => w.wallet);
    }
    case "xyz.nestwallet": {
      return image ? import("./image-JVTGPVY4.js").then((img) => img.default) : import("./xyz-6TGRCCCS.js").then((w) => w.wallet);
    }
    case "xyz.echooo": {
      return image ? import("./image-2C6TWMD7.js").then((img) => img.default) : import("./xyz-JTTBORVS.js").then((w) => w.wallet);
    }
    case "net.myrenegade": {
      return image ? import("./image-T4K2HHHO.js").then((img) => img.default) : import("./net-4I6DBKNS.js").then((w) => w.wallet);
    }
    case "io.ready": {
      return image ? import("./image-OX5V2TE5.js").then((img) => img.default) : import("./io-TLH32OUQ.js").then((w) => w.wallet);
    }
    case "ai.hacken": {
      return image ? import("./image-FUZODB6Q.js").then((img) => img.default) : import("./ai-M4CK2DAC.js").then((w) => w.wallet);
    }
    case "io.plutope": {
      return image ? import("./image-MTJY6UAP.js").then((img) => img.default) : import("./io-4K37O2UO.js").then((w) => w.wallet);
    }
    case "io.trustasset": {
      return image ? import("./image-XA4X52SC.js").then((img) => img.default) : import("./io-2OUEZVZU.js").then((w) => w.wallet);
    }
    case "app.dfinnwallet": {
      return image ? import("./image-VLI6ZCKX.js").then((img) => img.default) : import("./app-HGBIYGYJ.js").then((w) => w.wallet);
    }
    case "com.bmawallet": {
      return image ? import("./image-WRTS63PY.js").then((img) => img.default) : import("./com-IDR25SRZ.js").then((w) => w.wallet);
    }
    case "net.spatium.wallet": {
      return image ? import("./image-KXOZP327.js").then((img) => img.default) : import("./net.spatium-EBSLJIM4.js").then((w) => w.wallet);
    }
    case "io.transi": {
      return image ? import("./image-KWDZM3JO.js").then((img) => img.default) : import("./io-H2C73JK2.js").then((w) => w.wallet);
    }
    case "com.dolletwallet": {
      return image ? import("./image-3XPXEUVI.js").then((img) => img.default) : import("./com-SPRTZXVD.js").then((w) => w.wallet);
    }
    case "app.wombat": {
      return image ? import("./image-VKEDKKKR.js").then((img) => img.default) : import("./app-J7XLYP5E.js").then((w) => w.wallet);
    }
    case "fi.dropmate": {
      return image ? import("./image-HN4UT2MP.js").then((img) => img.default) : import("./fi-MH46U2IW.js").then((w) => w.wallet);
    }
    case "pub.dg": {
      return image ? import("./image-6MCAWLUJ.js").then((img) => img.default) : import("./pub-BCM6XBN4.js").then((w) => w.wallet);
    }
    case "com.icewal": {
      return image ? import("./image-5ESOAIQD.js").then((img) => img.default) : import("./com-QQPVG7PP.js").then((w) => w.wallet);
    }
    case "one.metapro.wallet": {
      return image ? import("./image-6VDTM3JY.js").then((img) => img.default) : import("./one.metapro-JZZTCOTQ.js").then((w) => w.wallet);
    }
    case "xyz.bonuz": {
      return image ? import("./image-24U2WBYW.js").then((img) => img.default) : import("./xyz-QSKGFGJW.js").then((w) => w.wallet);
    }
    case "io.shido": {
      return image ? import("./image-7OU6UVPL.js").then((img) => img.default) : import("./io-X4AWA27Q.js").then((w) => w.wallet);
    }
    case "co.lifedefi": {
      return image ? import("./image-N53KCP2W.js").then((img) => img.default) : import("./co-4QEGB6VV.js").then((w) => w.wallet);
    }
    case "fun.tobi": {
      return image ? import("./image-XUGPYK2I.js").then((img) => img.default) : import("./fun-LYGVTTTP.js").then((w) => w.wallet);
    }
    case "app.clot": {
      return image ? import("./image-D5ZHP4L6.js").then((img) => img.default) : import("./app-MFHNNKPC.js").then((w) => w.wallet);
    }
    case "me.komet.app": {
      return image ? import("./image-QZKB4QH2.js").then((img) => img.default) : import("./me.komet-E7D6F2JB.js").then((w) => w.wallet);
    }
    case "io.guardiianwallet": {
      return image ? import("./image-H66KD67W.js").then((img) => img.default) : import("./io-DIWAXNTD.js").then((w) => w.wallet);
    }
    case "io.wallypto": {
      return image ? import("./image-TJPXCNVF.js").then((img) => img.default) : import("./io-Z5GSMWWC.js").then((w) => w.wallet);
    }
    case "com.safemoon": {
      return image ? import("./image-T7NA4A2Y.js").then((img) => img.default) : import("./com-OKQHPEYA.js").then((w) => w.wallet);
    }
    case "com.elrond.maiar.wallet": {
      return image ? import("./image-L7XMXCCE.js").then((img) => img.default) : import("./com.elrond.maiar-CPDDYEOU.js").then((w) => w.wallet);
    }
    case "co.swopme": {
      return image ? import("./image-63JBKI3J.js").then((img) => img.default) : import("./co-A2VHPEPT.js").then((w) => w.wallet);
    }
    case "com.bitpay": {
      return image ? import("./image-R5DDRXEO.js").then((img) => img.default) : import("./com-NSXJ3MYN.js").then((w) => w.wallet);
    }
    case "app.tofee": {
      return image ? import("./image-WD5JWD6U.js").then((img) => img.default) : import("./app-LUGTXPGI.js").then((w) => w.wallet);
    }
    case "com.zypto": {
      return image ? import("./image-CX4RMA4S.js").then((img) => img.default) : import("./com-USI3H3ZY.js").then((w) => w.wallet);
    }
    case "xyz.orion": {
      return image ? import("./image-2DLIROHM.js").then((img) => img.default) : import("./xyz-ZHYDMTP5.js").then((w) => w.wallet);
    }
    case "io.uptn.dapp-web": {
      return image ? import("./image-7U7UXPGY.js").then((img) => img.default) : import("./io.uptn-GWS6HTWS.js").then((w) => w.wallet);
    }
    case "app.nicegram": {
      return image ? import("./image-AR3FQDWK.js").then((img) => img.default) : import("./app-CEHOPHKL.js").then((w) => w.wallet);
    }
    case "finance.openwallet": {
      return image ? import("./image-TW36VKLS.js").then((img) => img.default) : import("./finance-GAXWYNOQ.js").then((w) => w.wallet);
    }
    case "com.tastycrypto": {
      return image ? import("./image-J6OTD3HY.js").then((img) => img.default) : import("./com-HUVDUN75.js").then((w) => w.wallet);
    }
    case "com.ipmb": {
      return image ? import("./image-EWL7XSZS.js").then((img) => img.default) : import("./com-66Q6X2AN.js").then((w) => w.wallet);
    }
    case "com.daffione": {
      return image ? import("./image-2MC3OA63.js").then((img) => img.default) : import("./com-LFG2VXGV.js").then((w) => w.wallet);
    }
    case "io.owallet": {
      return image ? import("./image-RCVINJ4L.js").then((img) => img.default) : import("./io-CWMDB2MU.js").then((w) => w.wallet);
    }
    case "com.beexo": {
      return image ? import("./image-22XCL4QC.js").then((img) => img.default) : import("./com-KFSYP3UK.js").then((w) => w.wallet);
    }
    case "com.webauth": {
      return image ? import("./image-QMD3UXYM.js").then((img) => img.default) : import("./com-IATVSYRF.js").then((w) => w.wallet);
    }
    case "id.plumaa": {
      return image ? import("./image-TGDIBLJ5.js").then((img) => img.default) : import("./id-UVORZUHE.js").then((w) => w.wallet);
    }
    case "social.gm2": {
      return image ? import("./image-DZDKYDL2.js").then((img) => img.default) : import("./social-IGLKXP3O.js").then((w) => w.wallet);
    }
    case "nl.greenhood.wallet": {
      return image ? import("./image-P3F6JWUP.js").then((img) => img.default) : import("./nl.greenhood-2VCIICQQ.js").then((w) => w.wallet);
    }
    case "com.coinbase.wallet": {
      return image ? import("./image-UR6R66GX.js").then((img) => img.default) : import("./com.coinbase-XCXEA6KF.js").then((w) => w.wallet);
    }
    case "app.phantom": {
      return image ? import("./image-SKFBWVXM.js").then((img) => img.default) : import("./app-IEYL7BOV.js").then((w) => w.wallet);
    }
    case "io.rabby": {
      return image ? import("./image-RUAKVMHJ.js").then((img) => img.default) : import("./io-6HD3H3FJ.js").then((w) => w.wallet);
    }
    case "com.brave.wallet": {
      return image ? import("./image-KVUL54ZL.js").then((img) => img.default) : import("./com.brave-D3ZUHE7V.js").then((w) => w.wallet);
    }
    case "io.xdefi": {
      return image ? import("./image-FNGTNT45.js").then((img) => img.default) : import("./io-D6Z3AKMH.js").then((w) => w.wallet);
    }
    case "com.moongate.one": {
      return image ? import("./image-2VBH6P4I.js").then((img) => img.default) : import("./com.moongate-IFYOW5HA.js").then((w) => w.wallet);
    }
    case "com.blanqlabs.wallet": {
      return image ? import("./image-V5M6SPNZ.js").then((img) => img.default) : import("./com.blanqlabs-SYJXQAS6.js").then((w) => w.wallet);
    }
    case "tech.levain": {
      return image ? import("./image-NDYGNMMC.js").then((img) => img.default) : import("./tech-C727ACOE.js").then((w) => w.wallet);
    }
    case "com.enkrypt": {
      return image ? import("./image-D2BFLLX6.js").then((img) => img.default) : import("./com-7ZICZNFF.js").then((w) => w.wallet);
    }
    case "com.scramble": {
      return image ? import("./image-L7F3ZTNT.js").then((img) => img.default) : import("./com-KWK64UB7.js").then((w) => w.wallet);
    }
    case "io.finoa": {
      return image ? import("./image-7EORRWO4.js").then((img) => img.default) : import("./io-DXHXE7IX.js").then((w) => w.wallet);
    }
    case "inc.tomo": {
      return image ? import("./image-I2F4TK64.js").then((img) => img.default) : import("./inc-2JDOS23Q.js").then((w) => w.wallet);
    }
    case "com.walletconnect.com": {
      return image ? import("./image-EZTUCZIK.js").then((img) => img.default) : import("./com.walletconnect-QWEQRBQR.js").then((w) => w.wallet);
    }
    case "io.leapwallet.CompassWallet": {
      return image ? import("./image-VW2FN7E5.js").then((img) => img.default) : import("./io.leapwallet-GH33NGTJ.js").then((w) => w.wallet);
    }
    case "app.nightly": {
      return image ? import("./image-CP6E35DJ.js").then((img) => img.default) : import("./app-YG5QZHYU.js").then((w) => w.wallet);
    }
    case "com.blazpay.wallet": {
      return image ? import("./image-ZOCXRE6K.js").then((img) => img.default) : import("./com.blazpay-G2RYDJ7L.js").then((w) => w.wallet);
    }
    case "com.lootrush": {
      return image ? import("./image-2O2NSLAV.js").then((img) => img.default) : import("./com-NFP3O76O.js").then((w) => w.wallet);
    }
    case "app.core.extension": {
      return image ? import("./image-XFK44ZH7.js").then((img) => img.default) : import("./app.core-FOKZSNJL.js").then((w) => w.wallet);
    }
    case "xyz.dawnwallet": {
      return image ? import("./image-CFMPEXUH.js").then((img) => img.default) : import("./xyz-3DUFJPG6.js").then((w) => w.wallet);
    }
    case "xyz.abs": {
      return image ? import("./image-5QOWOT7K.js").then((img) => img.default) : import("./xyz-WOO5ZF56.js").then((w) => w.wallet);
    }
    default: {
      throw new Error(`Wallet with id ${id} not found`);
    }
  }
}

export {
  isEcosystemWallet,
  getWalletInfo
};
//# sourceMappingURL=chunk-XC5J5ANL.js.map
