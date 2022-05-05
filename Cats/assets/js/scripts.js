const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // aqui é criada uma variável chamada BASE_URL que receberá a url, e armazenar emforma de string, para que não precisemos ficar toda vez trabalhando a url, e sim sua variável

const getCats = async () => { //aqui cria-se a função assíncrona de carregar os gatos, denominada de getCats
	try {//Try para tentar fazer tudo que está dentro dele...
		const data = await fetch(BASE_URL); //aqui é feito o await e o fetch da URL
		const json = await data.json();//aqui é convertido o conteúdo da variável data para JSON
		return json.webpurl;// e a função vai retornar o arquivo da foto comprimida (webpurl) contido no JSON
	} catch (e) {//mas caso não dê certo, vai chamar os erros...
		console.log(e.message);
	}
};

const loadImg = async () => {// cria a função assíncrona LoadImg, responsável por carregar a foto
	const img = document.getElementsByTagName('img')[0];//pega a imagem
	img.src = await getCats();// dá um await na getCats 
};

loadImg();//já chama uma imagem logo que a página executar

const btn = document.getElementById('change-cat');//ativa o botão chamado "change.cat"
btn.addEventListener('click', loadImg);//gerencia o evento do clique no botão