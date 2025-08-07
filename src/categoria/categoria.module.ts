// Importa o decorador @Module, usado para definir um módulo no NestJS
import { Module } from '@nestjs/common';

// Importa o service responsável pela lógica de negócio relacionada à entidade Categoria
import { CategoriaService } from './categoria.service';

// Importa o controller, que expõe endpoints HTTP para acessar as funcionalidades do service
import { CategoriaController } from './categoria.controller';

// Importa o módulo do TypeORM para registrar a entidade Categoria com o repositório do banco
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa a entidade que representa a tabela 'categoria' no banco de dados
import { Categoria } from './entities/categoria.entity';

@Module({
  // Importa o TypeOrmModule e registra a entidade Categoria para uso com repositórios injetáveis
  // Isso permite usar `@InjectRepository(Categoria)` no service para interagir com o banco
  imports: [TypeOrmModule.forFeature([Categoria])],

  // Registra o service no módulo, permitindo que ele seja injetado onde necessário
  providers: [CategoriaService],

  // Registra o controller que vai lidar com as requisições HTTP
  controllers: [CategoriaController]
})
export class CategoriaModule {}
