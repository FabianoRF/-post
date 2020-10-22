import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Post from './Post';

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  comment: string;

  @Column()
  post_id: number;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
