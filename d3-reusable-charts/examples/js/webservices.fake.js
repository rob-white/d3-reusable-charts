$.ajax.fake.registerWebservice('http://example.url.com/example3.json', function(data) {
    var mockData = [];
    for(var i = 0; i < 1000; i++) {
        mockData.push({
            id: i,
            player: 'Player ' + i,
            gender: i % 3 == 0 ? 'Male' : 'Female',
            score: Math.round(Math.random() * (1 - 99) + 99)
        });
    }

    return mockData;
});