var a={
    fn : "Tam",
    ln : "TAMA",
    age : 23,
    email : "asewe@ghh.net"

};
//forin a key thak r sathe thak obj(variable er name)
for (var key in a)
{
    document.write(key + ":" + a[key] + " <br> ");
}