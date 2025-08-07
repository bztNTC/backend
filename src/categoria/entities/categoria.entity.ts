// Importa os decoradores do TypeORM que ajudam a mapear esta classe para uma tabela no banco de dados
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// O decorador @Entity() indica que esta classe é uma entidade do banco de dados
// Ou seja, será mapeada para uma tabela chamada 'categoria' (por padrão, o nome da classe em minúsculo)
@Entity()
export class Categoria {
  
  // Define a coluna 'id' como a chave primária da tabela
  // E especifica que seu valor será gerado automaticamente (auto-incremento)
  @PrimaryGeneratedColumn()
  id: number;

  // Define a coluna 'nome' como um campo comum na tabela
  // Por padrão, será do tipo string/varchar e obrigatório (nullable: false)
  @Column()
  nome: string;

  // Define a coluna 'descricao' como opcional (nullable: true)
  // Isso significa que pode ser null no banco de dados
  @Column({ nullable: true })
  descricao: string;
}
