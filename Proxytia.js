var player = '';
var peran = '';

//Nama Faway peran Ksatria
if (player === 'Faway' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + player)
    console.log('Halo ' + peran + ' ' + player + ', kamu dapat menyerang dengan senjatamu!')
}
//Nama Nana peran Tabib
else if (player === 'Nana' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + player)
    console.log('Halo ' + peran + ' ' + player + ', kamu akan membantu temanmu yang terluka.')
}
//Nama Irfan peran penyihir
else if (player === 'Irfan' && pediran === 'Penyihir') {
    console.log('Selamat datang  Dunia Proxytia, ' + player)
    console.log('Halo ' + peran + ' ' + player + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
//Nama disiini peran belum diiisi
else if (player === 'Nana' && peran === '') {
    console.log('Silahkan pilih role kamu ' + player)
}
else if (player === 'Faway' && peran === '') {
    console.log('Silahkan pilih role kamu ' + player)
}
else if (player === 'Irfan' && peran === '') {
    console.log('Silahkan pilih role kamu ' + player)
}
//Nama belum diisi
else if (player === '' && peran === '') {
    console.log('Nama harus diisi!')
}