
# Auto Scaling Group
resource "aws_autoscaling_group" "db_scaling" {
  launch_configuration = aws_launch_configuration.db_config.id
  min_size             = 2
  max_size             = 5
  desired_capacity     = 2
  vpc_zone_identifier  = var.private_subnet_ids
  target_group_arns    = [aws_lb_target_group.db_tg.arn]

  tag {
    key                 = "Name"
    value               = "database-instance"
    propagate_at_launch = true
  }

  lifecycle {
    create_before_destroy = true
  }
}
