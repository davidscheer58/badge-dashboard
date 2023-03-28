export default async function handler(request, res) {

    const badges = [
        {
            "badgeTopTitle": "Technology & Information",
            "badgePic": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "badgeTitleName": "APA Style Citations: Introduction",
            "badgeCreatorName": "Abhi Shah"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badges);
  }