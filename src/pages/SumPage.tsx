import { useMemo, useState } from "react";
import { Paper, TextField, Typography, Stack } from "@mui/material";

export default function CalculosPage() {

  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const areaTriangulo = useMemo(() => {
    return (base * altura) / 2;
  }, [base, altura]);


  const [largo, setLargo] = useState(0);
  const [ancho, setAncho] = useState(0);

  const areaRectangulo = useMemo(() => {
    return largo * ancho;
  }, [largo, ancho]);

  const [valor, setValor] = useState(0);

  const iva = useMemo(() => {
    return valor * 0.12;
  }, [valor]);

  const total = useMemo(() => {
    return valor + iva;
  }, [valor, iva]);

  return (
    <Paper sx={{ p: 4, borderRadius: 3, maxWidth: 600 }}>
      
      <Typography variant="h6" fontWeight={900} gutterBottom>
        Cálculos Matemáticos y Comerciales
      </Typography>

      <Typography variant="h6" fontWeight={700} mt={2}>
        Área de Triángulo
      </Typography>

      <Stack direction="row" spacing={2} mb={1}>
        <TextField
          label="Base"
          type="number"
          value={base}
          onChange={(e) => setBase(Number(e.target.value))}
        />

        <TextField
          label="Altura"
          type="number"
          value={altura}
          onChange={(e) => setAltura(Number(e.target.value))}
        />
      </Stack>

      <Typography>
        Área: <strong>{areaTriangulo}</strong>
      </Typography>

      <Typography variant="h6" fontWeight={700} mt={3}>
        Área de Rectángulo
      </Typography>

      <Stack direction="row" spacing={2} mb={1}>
        <TextField
          label="Largo"
          type="number"
          value={largo}
          onChange={(e) => setLargo(Number(e.target.value))}
        />

        <TextField
          label="Ancho"
          type="number"
          value={ancho}
          onChange={(e) => setAncho(Number(e.target.value))}
        />
      </Stack>

      <Typography>
        Área: <strong>{areaRectangulo}</strong>
      </Typography>

      <Typography variant="h6" fontWeight={700} mt={3}>
        Cálculo de IVA (12%)
      </Typography>

      <TextField
        label="Valor del producto"
        type="number"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
        sx={{ mb: 1 }}
      />

      <Typography>
        IVA: <strong>{iva.toFixed(2)}</strong>
      </Typography>

      <Typography>
        Total: <strong>{total.toFixed(2)}</strong>
      </Typography>

    </Paper>
  );
}
