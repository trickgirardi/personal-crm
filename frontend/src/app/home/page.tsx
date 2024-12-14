import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Table>
        <TableHeader>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Última interação</TableHead>
          <TableHead>Tarefas</TableHead>
          <TableHead>Lembretes</TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Patrick Girardi</TableCell>
            <TableCell>Família, Importante</TableCell>
            <TableCell>11/11/2024</TableCell>
            <TableCell>[ ] Comprar necessaire</TableCell>
            <TableCell>Gosta de sorvete</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
