dscc.subscribeToData(function(data) {

  const table = data.tables.DEFAULT;

  const rows = table.rows;

  const container = document.createElement("div");

  rows.forEach(r => {

    const row = document.createElement("div");
    row.innerText = r.join(" | ");

    container.appendChild(row);

  });

  document.body.appendChild(container);

});
