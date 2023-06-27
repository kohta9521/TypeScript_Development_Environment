// export{}

const heightList = new Map();

heightList.set("Tomoko", 155.3);
heightList.set("Yumi", 172.3);
heightList.set("Ayako", 187.2);
heightList.set("Rina", 287.2);
heightList.set("Yoshie", 102.3);

const ayakaHight = heightList.get("Ayako");
console.log(`Ayakaの診療 : ${ayakaHight}`)

for (const [key, value] of heightList) {
  console.log(`キーは${key}で値は${value}`);
}
