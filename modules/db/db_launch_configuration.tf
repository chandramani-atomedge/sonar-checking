
# Launch Configuration for Auto Scaling Group
resource "aws_launch_configuration" "db_config" {
  name_prefix     = "db-config-sg"
  image_id        = var.db_ami
  instance_type   = var.instance_type
  security_groups = [aws_security_group.db_sg.id]
  key_name        = var.keypair
  root_block_device {
    volume_type = "gp2"
    volume_size = 10
  }

  lifecycle {
    create_before_destroy = true
  }
}
