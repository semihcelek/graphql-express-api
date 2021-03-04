import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "./post-entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;

  @Column({
    select: false,
    // type: "varchar",
    //  length: 127,
  })
  passwordHash: string;

  @Column({
    unique: true,
  })
  email: string;

  @OneToMany((_type) => Post, (photo) => photo.author)
  @JoinTable()
  posts: Post[];

  //   read docs
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
