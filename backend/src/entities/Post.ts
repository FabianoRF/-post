import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Comment from './Comment';

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Comment, comment => comment.post, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'comment_id' })
  comments: Comment[];
}
