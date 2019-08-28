var nama = 'nabila';
var peran = 'tabib';

if (nama === ''){
    console.log('NAMA HARUS DIISI!')
}
else if (nama !== '' && peran === ''){
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}
else if (nama !== '' && peran === 'ksatria'){
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('halo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!')
}
else if (nama !== '' && peran === 'tabib'){
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('halo ' + peran + ' ' + nama +', kamu akan membantu temanmu yang terluka.')
}
else if (nama !== '' && peran === ''){
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('halo ' + peran + ' ' + nama +', ciptakan keajaiban yang membantu kemenanganmu!')
}