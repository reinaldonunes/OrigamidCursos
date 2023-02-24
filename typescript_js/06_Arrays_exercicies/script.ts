async function fetchCursos(){
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();

  mostrarCursos(data);
}


fetchCursos();

interface Curso{
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nome: string;
  tags: string[];
  nivel: 'iniciante' | 'avancado';
}


function mostrarCursos(cursos: Curso[]){
  cursos.forEach(curso => {
    let color;
    if(curso.nivel === 'iniciante'){
      color = 'blue';
    }else if (curso.nivel === 'avancado'){
      color = 'red';
    }

    document.body.innerHTML += `
      <div style="color: ${color};">
        <h2>Curso: ${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito? "Gratuito" : "Pago"}</p>
        <p>${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(" | ")}</p>
      </div>
    `
  })

}