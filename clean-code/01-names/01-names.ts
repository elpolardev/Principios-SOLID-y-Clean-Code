(() => {
  // Ejemplo
  
  // Archivos a evaluar - files to evaluate
  // mal
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];
  //mejor
  const filesToEvaluate = [
    { id: 1, isFlagged: false },
    { id: 2, isFlagged: false },
    { id: 3, isFlagged: true },
    { id: 4, isFlagged: false },
    { id: 5, isFlagged: false },
    { id: 7, isFlagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  //mal
  const arhivos = fs.map((f) => f.f);
  //mejor
  const filesToDelete = filesToEvaluate.map((file) => file.isFlagged);


  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;

  // primer nombre - first name
  const nombre = 'Fernando';

  // primer apellido - last name
  const apellido = 'Herrera';

  // días desde la última modificación - days since modification
  const dsm = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
})();
