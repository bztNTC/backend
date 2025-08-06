// Importa o decorador @Module do NestJS, que define um módulo da aplicação
import { Module } from '@nestjs/common';

// Importa o módulo TypeOrmModule, que integra o TypeORM com o NestJS
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // A propriedade 'imports' define outros módulos que este módulo precisa usar
  imports: [
    // Configura o módulo TypeORM para se conectar a um banco PostgreSQL
    TypeOrmModule.forRoot({
      // Tipo do banco de dados usado
      type: 'postgres',

      // Endereço do host onde o banco está rodando (neste caso, localmente)
      host: 'localhost',

      // Porta padrão do PostgreSQL
      port: 5432,

      // Nome de usuário do banco
      username: 'postgres',

      // Senha do banco
      password: 'root',

      // Nome do banco de dados que será utilizado
      database: 'estoque_db',

      // Caminho para localizar todas as entidades do projeto
      // __dirname representa o diretório atual, e o padrão procura por arquivos .entity.ts ou .entity.js
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      // Define se o TypeORM deve sincronizar automaticamente o esquema do banco com as entidades
      // Útil durante o desenvolvimento, mas deve ser false em produção
      synchronize: true,
    }),
  ],
})
// Declaração do módulo principal da aplicação
export class AppModule {}