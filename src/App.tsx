import React, { useState, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, TextField, makeStyles } from "@material-ui/core";
import gpus from "./gpus.json";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
  topGrid: {
    height: "50%",
  },
});

export interface GPU {
  id: number;
  name: string;
  price?: number;
  g2d?: number;
  dx9?: number;
  dx10?: number;
  dx11?: number;
  dx12?: number;
  overallSpeed?: number;
  pricePerG3D?: number;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 250 },
  {
    field: "g2d",
    headerName: "G2D Score",
    sortable: true,
    width: 110,
  },
  {
    field: "dx9",
    headerName: "DirectX 9",
    sortable: true,
    width: 110,
  },
  {
    field: "dx10",
    headerName: "DirectX 10",
    sortable: true,
    width: 110,
  },
  {
    field: "dx11",
    headerName: "DirectX 11",
    sortable: true,
    width: 110,
  },
  {
    field: "dx12",
    headerName: "DirectX 12",
    sortable: true,
    width: 110,
  },
  {
    field: "overallSpeed",
    headerName: "Overall Speed",
    sortable: true,
    width: 110,
  },
  {
    field: "pricePerG3D",
    headerName: "Price Per G3D",
    sortable: true,
    width: 110,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: true,
    width: 150,
    renderCell: ({ row }) => (row.price ? `$${row.price.toFixed(2)}` : ""),
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number>();

  const classes = useStyles();

  const displayedCards = useMemo(
    () =>
      gpus.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const selectedGPU = useMemo(
    () => gpus.find(({ id }) => id === selectedId),
    [selectedId]
  );

  return (
    <Container className={classes.container}>
      <TextField
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
        variant="filled"
        fullWidth
      />
      <DataGrid
        rows={displayedCards}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6, 12, 48, 96]}
        onRowClick={(row) => setSelectedId(row.row.id)}
        disableSelectionOnClick
        className={classes.topGrid}
      />
      {selectedGPU && <div>{selectedGPU.name}</div>}
    </Container>
  );
}

export default App;
