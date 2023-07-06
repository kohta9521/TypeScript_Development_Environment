export default function callbackSample() {
    const url = "https://api.github.com/users/kohta9521";

  // callbackで呼び出す非同期処理
    const fetchProfile = () => {
    fetch(url)
        .then((res) => {
            // レスポンスのbodyをjsonで返す
            res.json()
            .then((json) => {
                console.log("Asynchronous Callback Sample1 ", json);
                return json
            })
            .catch((error) => {
                console.error(error);
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }
    const profile = fetchProfile();
    console.log("Asynchronous Callback Sample1 ", profile);

}

