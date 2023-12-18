let videoList = document.querySelectorAll('.video-list-container .list');

        videoList.forEach(vid =>{
            console.log('joi')
        vid.onclick = () =>{
            console.log('clicked')
            videoList.forEach(remove =>{remove.classList.remove('active')});
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
});

const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7613a0d89cmsh173e7e69a982c5bp18fdf6jsn0388f5b82c80',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

fetch(url, options).then(function(response){
    console.log('Success!', response);
}).catch(function(err){
    console.log('Something went worng')
})